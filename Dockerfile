FROM node:lts-buster-slim

WORKDIR /home
COPY ./ /home

RUN yarn
RUN yarn build
CMD yarn start