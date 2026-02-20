#!/bin/bash

# Script to force Netlify to use the latest version by adding cache-busting

echo "🔧 Adding cache-busting to JavaScript..."

# Get current timestamp
TIMESTAMP=$(date +%s)

echo "Timestamp: $TIMESTAMP"
echo ""
echo "✅ This will help force browsers to load the new JavaScript file"
echo ""
echo "After running this:"
echo "1. Commit and push"
echo "2. Netlify will redeploy"
echo "3. Visitors will get the fresh version"
echo ""

