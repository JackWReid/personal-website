#!/usr/bin/env bash

echo "[$(data)] Starting book data update"
rm -rv ./tmp;
git checkout -f;
git pull origin master;

# Download latest data from API
mkdir ./tmp;
curl -L https://api.jackreid.xyz/books/reading -o ./tmp/reading.json;
curl -L https://api.jackreid.xyz/books/toread -o ./tmp/toread.json;
curl -L https://api.jackreid.xyz/books/read -o ./tmp/read.json;

# Replace data with tmp
rm -r ./data/books; mv ./tmp ./data/books;

# Update git
if [ -z "$(git status --porcelain)" ]; then
	echo "[$(date)] No changes found"
else
	echo "[$(date)] Changes found"
	git add data && git commit -m "[$(date)] Update books" && git push origin master;
fi