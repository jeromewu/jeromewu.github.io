#!/bin/sh

OUTPUT_DIR=../out

rm -rf out && mkdir out
cd src
xelatex -output-directory=${OUTPUT_DIR} resume.tex
xelatex -output-directory=${OUTPUT_DIR} coverletter-grab.tex
xelatex -output-directory=${OUTPUT_DIR} coverletter-transferwise.tex
cd -
