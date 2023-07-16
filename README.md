# stocks-app

expo build
expo build:android
expo build:ios 

#Android
- Run expo build:android and choose apk-bundle option
- Generate keystore file or update existing one. I don’t have any, so I let Expo create a new one
- After the keystore is created, it should run the build
- If everything goes fine, the terminal should paste an URL to the build. Go there and download an artifact. We will need it later to put the app in store

#Ios
Run expo build:iOS and choose archive option
Expo-cli asked you about sign in to Apple developer account. Pass credentials and log in
Then you need to verify your Apple account
If you successfully log in, you need to select a team
Creating iOS Certificates.
After that steps, build should run
If everything went fine, expo-cli shows a URL you can download an archive, do that – we will need it to next publish steps
