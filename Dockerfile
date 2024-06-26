FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install app dependencies
RUN npm install --production

COPY . .

# Build the app for production
RUN npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets
RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Expose port 8080 for the React Native packager (optional, if you need it)
EXPOSE 8080

# Start the app
CMD ["npx", "react-native", "start"]
