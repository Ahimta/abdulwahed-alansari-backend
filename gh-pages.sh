#!/bin/env sh

git branch -D gh-pages
git checkout -b gh-pages master

grunt build

git config user.name "Travis CI"
git config user.email "ahimta@gmail.com"

git add --force dist
git add .

git commit -am "Deploy to gh-pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/Ahimta/abdulwahed-alansari-frontend.git" `git subtree split --prefix dist gh-pages`:gh-pages
