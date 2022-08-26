---
title: Improving performance using WebAssembly SIMD Intrinsics
date: 2022-08-26T12:00:00.000Z
description: Faster, but with a steep learning curve.
---

![WebAssembly Logo](./wa-logo.png)

WebAssembly is a technology famous of boosting performance of web applications,
but what might be the best practice to do achieve maximum performance and what
is the cost is what we are going to discuss in this post.

To begin with, let's talk about how developers develop WebAssembly applications based
on the result of [The State of WebAssembly
2022](https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html). The top 3
languages used to develop WebAssembly are Rust, JavaScript and C/C++.
(JavaScript come in second place due to QuickJS, a tiny JS VM, is ported to
WebAssembly and boosts JavaScript runtime performance) As Rust and C/C++ are
top languages, it is common that developers develop Rust or C/C++
programs and compile to WebAssembly.

Take C/C++ as an example, usually you might use GCC to compile like this:

```bash
gcc -o main main.c
```

When you want to compile to WebAssembly, you might use [Emscripten](https://emscripten.org/):

```bash
emcc -o main.js main.c
# or
emcc -o main.wasm main.c
```

Then you can use NodeJS or runtime like wasmtime or wasmer to run the program.

But is that the end of the story? Maybe not. Let's use a [matrix
multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication)
as example to benchmark:

JavaScript Version ([Source Code](https://github.com/jeromewu/wasm-perf/blob/main/mul_mats.js)):

```javascript
// in_b is transposed to speed up multiplication.
const mulMats = (out, in_a, in_b, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      out.arr[i*n+j] = 0;
      for (let k = 0; k < n; k++) {
        out.arr[i*n+j] += in_a.arr[i*n+k] * in_b.arr[j*n+k];
      }
    }
  }
};
```

C Version ([Source Code](https://github.com/jeromewu/wasm-perf/blob/main/mul_mats.c)):

```c
// in_b is transposed to speed up multiplication.
void multiply_mats(int* out, int* in_a, int* in_b, int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      out[i*n+j] = 0;
      for (int k = 0; k < n; k++) {
        out[i*n+j] += in_a[i*n+k] * in_b[j*n+k];
      }
    }
  }
}
```

The performance of JavaScript version, C version and WebAssembly version:

| Version | Time to Complete | Remark |
| ------- | ---------------- | ------ |
| JavaScript | 5.768s | NodeJS v16.16.0 |
| C | 7.697s | GCC 12.2.0 |
| WebAssembly | 6.865s | Emscripten 3.1.18 |

It might be unexpected to see that JavaScript version is the fastest one, it is
simply because this is NOT a fair comparison as we didn't use flags to optimize
performance.

One of the most significant flag we can use here is `-O3`, let's add this flag
and below is the result:

| Version | Time to Complete | Remark |
| ------- | ---------------- | ------ |
| JavaScript | 5.768s | NodeJS v16.16.0 |
| C | 0.401s | GCC 12.2.0 |
| WebAssembly | 2.012s | Emscripten 3.1.18 |

With a simple flag, now WebAssembly version is around 65% faster!

But how might we improve the performance even more? Let's discuss what options
we have.

## Methods to Improve Performance

There are mainly three approaches to improve performance:

1. More optimization flags
2. Use multi-thread
3. Use SIMD intrinsics

### More optimization flags

More optimization flags like `-flto` might improve performance, but sometimes it
might introduce side effects, so it is essential to do more tests when using
more flags.

### Use multi-thread

WebAssembly supports multi-thread, so you can use libraries like pthread to
achieve multi-threading. It works but with a major drawback: SharedArrayBuffer.

SharedArrayBuffer is an essential technology behind multi-threading in
WebAssembly. It enables threads (which is web worker in browser) to communicate
with each other. But it also consumes more memory and suffers from browser
compatibility issue. (Mainly mobile browsers)

SharedArrayBuffer compatibility: [https://caniuse.com/sharedarraybuffer](https://caniuse.com/sharedarraybuffer)

### Use SIMD intrinsics

SIMD (Single Instruction, Multiple Data) is a type of parallel processing
supported by WebAssembly. In Emscripten, you can add flag `-msimd128` to
enable SIMD and improve performance for free:

| Version | Time to Complete |
| ------- | ---------------- |
| JavaScript | 5.768s |
| C | 0.401s |
| WebAssembly | 2.012s |
| WebAssembly (w/ -msimd128) | 0.278s |

> `-O3` flag comes with auto-vectorization, so it is better to use `-msimd128`
> with `-O3`

Wow, now our performance is so good that it is even faster than C version! But
it is not the end of the story as we haven't used our secret weapon: **SIMD
intrinsics**.

SIMD intrinsics are low-level functions to enable developers to write assembly
code in a more user-friendly way. It is supported not only in Emscripten, but
also other major languages like Rust and AssemblyScript. With SIMD intrinsics,
we can rewrite our code to improve performance further more:

```c
// in_b is transposed to speed up multiplication.
void multiply_mats(int* out, int* in_a, int* in_b, int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      out[i*n+j] = 0;
      for (int k = 0; k < n; k+=4) {
        v128_t a = wasm_v128_load(&in_a[i]);
        v128_t b = wasm_v128_load(&in_b[j]);
        v128_t prod = wasm_i32x4_mul(a, b);
        out[i*n+j] += 
          wasm_i32x4_extract_lane(prod, 0) +
          wasm_i32x4_extract_lane(prod, 1) +
          wasm_i32x4_extract_lane(prod, 2) +
          wasm_i32x4_extract_lane(prod, 3);
      }
    }
  }
}
```

| Version | Time to Complete |
| ------- | ---------------- |
| JavaScript | 5.768s |
| C | 0.401s |
| WebAssembly | 2.012s |
| WebAssembly (w/ -msimd128) | 0.278s |
| WebAssembly w/ SIMD intrinsics (w/ -msimd128) | 0.062s |

As the result, we are **99%** faster than the original JavaScript version!

## Conclusion

In this post, we visited a few methods to improve WebAssembly performance, and
finally we achieve a much better performance by using SIMD intrinsics. Although
it looks perfect, but there is actually a pretty steep learning curve to learn
SIMD intrinsics and master it. So the best bet is to use `-O3 -msimd128` flags
first and rewrite the most computing intensive parts in your code using SIMD
intrinsics to improve the performance little by little.

Hope you enjoy this post. :) Feel free to leave comments and try to run the code
using the source code in this repository: [https://github.com/jeromewu/wasm-perf](https://github.com/jeromewu/wasm-perf)
