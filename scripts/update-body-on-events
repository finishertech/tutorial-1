#!/usr/bin/env bash
set -euo pipefail

[ "$PROJECT_DIR" ] || exit 1

cd "$PROJECT_DIR"
for idx in 0 1
do
  # get event
  [ $idx = 0 ] &&
    event=evento-20192611 ||
    event=evento-20191010

  # get body
  curl -s http://localhost:8545 |
  pup "div#$event .container-body" |
  sed '1d;$d' |
  jq -Rs . > /tmp/body-$event

  # update events.json
  jq --argfile body /tmp/body-$event \
    '.['$idx'].body=$body|.' src/events.json |
  sponge src/events.json
done
