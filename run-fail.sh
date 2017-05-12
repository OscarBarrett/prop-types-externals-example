#!/bin/bash

rm -rf node_modules/external-lib
(cd external-lib && npm install && npm run build)

npm install && npm run serve