FROM node:lts as build

WORKDIR /app
COPY package*.json ./

RUN npm install pnpm -g && \
	pnpm install

COPY . .

RUN pnpm build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]