#!/bin/bash
cd /home/kavia/workspace/code-generation/test1-frontend-interface-10604-10613/test1_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

