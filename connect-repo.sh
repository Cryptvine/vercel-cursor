#!/usr/bin/env bash
# Connect this folder to your GitHub repo (the one Vercel uses) and push.
# Usage: ./connect-repo.sh https://github.com/YOUR_USERNAME/YOUR_REPO.git
# Or:    bash connect-repo.sh https://github.com/YOUR_USERNAME/YOUR_REPO.git

set -e
REPO_URL="${1:?Usage: $0 https://github.com/USERNAME/REPO.git}"

git init
git add .
git commit -m "Initial commit: Next.js site for cryptvine.dev" || true
git remote add origin "$REPO_URL"
git branch -M main
git push -u origin main

echo "Done. This folder is now connected to $REPO_URL — future pushes will trigger Vercel deploys."
