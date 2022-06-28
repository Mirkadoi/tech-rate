FROM node:16.13.2 as builder

RUN mkdir /techrate
WORKDIR /techrate
COPY . .

RUN npm i @vue/cli-service
RUN npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /techrate/dist .

EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
