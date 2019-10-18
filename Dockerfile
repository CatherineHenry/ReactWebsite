# stage: 1
FROM node:8.11.1 as react-build

# create app directory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./
RUN npm cache clean --force && npm install


# copy app source to image after npm install
# so that the application code changes don't mess up the docker cache of npm install step
COPY . ./
RUN npm run build


#EXPOSE 3000

#CMD ["npm", "run", "start"]

# production environment
FROM nginx:1.16.0-alpine
# Copy the nginx configuration file. This sets up the behavior of nginx, most
# importantly, it ensure nginx listens on port 8080. Google App Engine expects
# the runtime to respond to HTTP requests at port 8080.
COPY nginx.conf /etc/nginx/nginx.conf

# create log dir configured in nginx.conf
RUN mkdir -p /var/log/app_engine

# Create a simple file to handle heath checks. Health checking can be disabled
# in app.yaml, but is highly recommended. Google App Engine will send an HTTP
# request to /_ah/health and any 2xx or 404 response is considered healthy.
# Because 404 responses are considered healthy, this could actually be left
# out as nginx will return 404 if the file isn't found. However, it is better
# to be explicit.
RUN mkdir -p /usr/share/nginx/www/_ah && \
    echo "healthy" > /usr/share/nginx/www/_ah/health


COPY --from=react-build /usr/src/app/build /usr/share/nginx/www
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]