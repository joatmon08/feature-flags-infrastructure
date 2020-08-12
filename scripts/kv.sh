#!/bin/sh

while true
do
  sleep 3
  echo "waiting for leader..."
  consul info | grep -q 'leader = false'
  if [ $? -eq 0 ]; then
    break
  fi
done

consul kv put cluster/variables/zone us-central1-a
consul kv put cluster/variables/project $(cat /secrets/project)
consul kv put cluster/variables/environment prod
consul kv put cluster/toggles/enable_workload_identity false
consul kv put cluster/toggles/enable_highmem_nodepool false
consul kv put cluster/toggles/enable_pubsub_publisher false