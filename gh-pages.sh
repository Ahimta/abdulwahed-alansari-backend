#!/bin/env sh
# This script assumes:
# 1. You have a remote with the name `origin`
# 2. You have a branch with the name `gh-pages` on that remote

git checkout -B gh-pages HEAD

grunt build

git add --force --all dist

git commit -am "Deploy to gh-pages"
git push --force origin `git subtree split --prefix dist gh-pages`:gh-pages

git checkout master
