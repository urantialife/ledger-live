#!/bin/bash

# SENTRY_AUTH_TOKEN must be in environment. token must have permission scopes: org:read, project:read, project:releases
export SENTRY_ORG=ledger
export SENTRY_PROJECT=ledger-live-desktop-gre-tmp
export VERSION=`node -e "console.log(require('./package.json').version)"`