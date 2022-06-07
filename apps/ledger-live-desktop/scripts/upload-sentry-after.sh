#!/bin/bash
set -e
. ./scripts/upload-sentry-env.sh
sentry-cli releases finalize $VERSION