#!/bin/sh

# Define the list of filenames in an array
files=(
 "repo1-name"
 "repo2-name"
 "repo3-name"
 "repo4-name"
 "repo5-name"
 "repo6-name"
)

# Loop through the array and create each JSON file
for file in "${files[@]}"; do
  echo '[]' > "$file.json"
done
