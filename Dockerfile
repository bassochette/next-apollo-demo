# Create and change to the app directory.
WORKDIR /usr/src/app
# Copy local code to the container image.
COPY . ./


# build
RUN npm run build

ENV PORT=5000
EXPOSE $PORT

# Run the web service on container startup.
CMD [ "npm", "start" ]
