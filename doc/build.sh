#!/bin/bash

OUTPUT_DIR=../out

gen_pdf() {
  xelatex -output-directory=${OUTPUT_DIR} $1
}

build() {
  gen_pdf resume.tex
  gen_pdf coverletter-grab.tex
  gen_pdf coverletter-transferwise.tex
  #gen_pdf cv.tex
  #gen_pdf coverletter.tex
}

main() {
  rm -rf out && mkdir out
  cd src
  build
  cd -
}

main "$@"
