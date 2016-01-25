# TestAndroid


## Prepare
Before start to develop you should [setup Android environment](https://facebook.github.io/react-native/docs/android-setup.html)
After setup we should install project dependencies and create android emulator

Install needed for react-native android sdk packagestor-android
```sh
android update sdk --all --no-ui -t \
tools,\
platform-tool,\
build-tools-23.0.1,\
android-23,\
extra-android-support,\
extra-android-m2repository,\
sys-img-x86-android-23,\
sys-img-x86_64-android-23


# For OSX only
android update sdk --all --no-ui -t extra-intel-Hardware_Accelerated_Execution_Manager

# The SDK Manager will download the installer to the "extras" directory, under the main SDK directory.
# Even though the SDK manager says "Installed" it actually means that the Intel HAXM executable was downloaded.
# You will still need to run the installer from the "extras" directory to finish installation.
# Run the installer inside the <sdk folder>/sdk/extras/intel/Hardware_Accelerated_Execution_Manager/ directory and follow the installation instructions for your platform.
# If you install throught brew then <sdk folder> will be /usr/local/Cellar/android-sdk/
# @see https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-mac-os-x

sudo /usr/local/Cellar/android-sdk/24.4.1_1/extras/intel/Hardware_Accelerated_Execution_Manager/silent_install.sh
```

You can look what will be installed without installation simple add flag `--dry-mode`
```sh
android update sdk --all --no-ui -t \
tools,\
platform-tool,\
build-tools-23.0.1,\
android-23,\
extra-android-support,\
extra-android-m2repository,\
sys-img-x86-android-23,\
sys-img-x86_64-android-23 \
--dry-mode
```

```sh
npm install
npm run emulator-create-android
```


## Develop
```sh
npm start
upm run emulator-android
npm run android
```


## Debugging
F2 - open settings dialog on android emulator
