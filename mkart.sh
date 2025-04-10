#!/bin/bash

# Generate a random hash for the new directory name
NEW_DIR="src/content/blog/$(openssl rand -hex 12)"

# Create the new directory
mkdir -p "$NEW_DIR"

# Copy template.mdx to the new directory as index.mdx
cp template.mdx "$NEW_DIR/index.mdx"

# @today@ を現在の日付に置き換える
sed -i '' "s/@today@/$(date +%Y-%m-%d)/g" "$NEW_DIR/index.mdx"

# Print the new directory path
echo "File copied to: $NEW_DIR/index.mdx"
