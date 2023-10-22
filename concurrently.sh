#!/usr/bin/env bash

concurrently 'npm run dev' 'cd cms && npm run develop'