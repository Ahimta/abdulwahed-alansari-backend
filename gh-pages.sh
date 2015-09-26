#!/bin/env sh

git branch -D gh-pages
git checkout -b gh-pages HEAD

grunt build

git add --force --all dist

git commit -am "Deploy to gh-pages"
git push --force origin `git subtree split --prefix dist gh-pages`:gh-pages

git checkout master
