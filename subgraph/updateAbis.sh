#!/bin/bash

for f in $(ls -1 ../contracts/deployments/mumbai/*.json); do cat $f | jq '. | {address: .address, abi: .abi}' > abis/$(basename $f) ; done
