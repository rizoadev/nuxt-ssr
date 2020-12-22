#!/bin/bash
img=registry.gitlab.com/ikamai/tmp-bigprojects/nuxt:ssr-1

docker login -u afnia -p kopet1234
docker login registry.gitlab.com -u ikamai -p kopet12345

docker build -f ./Dockerfile -t $img ./
docker push $img
exit
