#!/bin/ash

nats-server -c /nats-server.conf &
sleep 5

for STREAM in $(echo "$STREAM_NAMES" | tr "," "\n")
do
  nats kv add "$STREAM" 
done

echo "Stream List:"
nats stream ls -a

wait $!  
