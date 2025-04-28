#!/bin/bash

echo "Installing correct Node.js version..."
nvm install 18.17.0
nvm use 18.17.0
node -v
npm -v
yarn -v

# continue normal yarn install
yarn install