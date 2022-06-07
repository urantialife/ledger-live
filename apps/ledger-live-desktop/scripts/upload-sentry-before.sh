#!/bin/bash
set -e
. ./scripts/upload-sentry-env.sh
sentry-cli releases new $VERSION
sentry-cli releases files $VERSION upload-sourcemaps $SOURCE_FOLDER
sentry-cli releases set-commits $VERSION --auto
