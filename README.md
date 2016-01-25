## TestAndroid


## Prepare
Before start to develop you should [setup Android environment](https://facebook.github.io/react-native/docs/android-setup.html)
After setup we should install project dependencies and create android emulator

Install needed for react-native android sdk packages
```sh
android update sdk --no-ui -t \
tools,\
platform-tool,\
build-tools-21.0.1,\
extra-android-support,\
extra-android-m2repository,\
sys-img-x86-android-23,\
sys-img-x86_64-android-23
```

```sh
npm install
npm run emulator-create-android
```


## Develop
```sh
npm start
npm run emulator-android
npm run android
```


## Debugging
F2 - open settings dialog on android emulator
