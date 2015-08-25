#!/bin/env sh

git branch -D gh-pages
git checkout -b gh-pages master

grunt build

git add --force dist
git add .

git commit -m "Deploy gh-pages"
git push --force "https://${GH_TOKEN}@github.com/Ahimta/abdulwahed-alansari-frontend.git" `git subtree split --prefix dist gh-pages`:gh-pages

git checkout master
