FROM node:14.17.4
WORKDIR /usr/src/app
COPY package.json npm-shrinkwrap.json ./
RUN npm install --only=production
COPY . ./
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "serve"]