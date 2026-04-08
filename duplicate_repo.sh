#!/bin/bash

# Configuration
SOURCE_DIR="/Users/ayoub/Desktop/Divine concrete coatings"
DEST_DIR="/Users/ayoub/Desktop/BOPS"
REPO_URL="https://github.com/madorayoub/BOPS.git"

echo "=========================================="
echo "    Site Duplication Script"
echo "=========================================="
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"
echo "------------------------------------------"

# Ensure Source Exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Error: Source directory not found!"
    exit 1
fi

# Create/Clone Destination
if [ ! -d "$DEST_DIR" ]; then
    echo "📂 Cloning BOPS repository..."
    git clone "$REPO_URL" "$DEST_DIR"
else
    echo "📂 BOPS repository found."
fi

# Sync Content
echo "🔄 Syncing files..."
# rsync options:
# -a: archive mode (preserves permissions, times, etc.)
# -v: verbose
# --delete: delete extraneous files from dest dirs (clean mirror)
# --exclude: skip .git folder
rsync -av --delete --exclude '.git' "$SOURCE_DIR/" "$DEST_DIR/"

echo "✅ Sync detailed above."
echo "------------------------------------------"
echo "Next Steps:"
echo "1. cd \"$DEST_DIR\""
echo "2. git add ."
echo "3. git commit -m 'Duplicate site structure'"
echo "4. git push"
