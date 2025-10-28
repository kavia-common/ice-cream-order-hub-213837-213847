#!/bin/bash
cd /home/kavia/workspace/code-generation/ice-cream-order-hub-213837-213847/icecream_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

