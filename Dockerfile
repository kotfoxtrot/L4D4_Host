FROM node:18-alpine

# Create application directory
WORKDIR /usr/src/app

# Install dependencies
# The asterisk ("*") is used to copy both files: package.json and package-lock.json
COPY package*.json ./

RUN npm install && npm cache clean --force

# Copy app code
COPY . .

# Run EXPOSE
EXPOSE 3030

#Run service
CMD [ "node", "index.js" ]