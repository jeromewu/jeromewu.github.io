#!/bin/bash
set -e

check_command() {
  CMD=$1
  command -v $CMD >/dev/null 2>&1 || { echo >&2 "$CMD is not installed  Aborting."; exit 1; }
}

build() {
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)" 
  docker run -it \
    -v ${SCRIPT_DIR}:/usr/src \
    texlive/texlive-full:latest \
    bash -c "cd /usr/src && bash build.sh"
}

main() {
  check_command docker
  build
}

main "$@"
