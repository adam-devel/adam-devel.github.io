#!/bin/bash

SEARCH_DIR="$HOME/my-notes"

# Destination directory (create if it doesn't exist)
DEST_DIR="./content"
mkdir -p "$DEST_DIR"

# Find matching markdown files and copy them
rg --multiline --multiline-dotall -l \
  -P '^---\s*\n+.*^publish:\s*"?true"?\s*$.*\n---' "$SEARCH_DIR" --glob '*.md' | while read -r file; do
    # Copy the file into DEST_DIR, overwrite if it exists
    ln -fs "$file" "$DEST_DIR/"
done
