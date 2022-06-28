FROM node:16.13.2 as builder

RUN mkdir /techrate
WORKDIR /techrate
COPY . .

RUN npm install && npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /techrate/dist .

EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
