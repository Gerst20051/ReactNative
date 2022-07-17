# ReactNative

Collection of React Native Apps

## Setup Xcode

https://reactnative.dev/docs/environment-setup#command-line-tools

> Xcode → Preferences → Locations → Locations → Command Line Tools: Xcode 13.4.1 (13F100) (/Applications/Xcode.app)

`[$]> sudo xcode-select --switch /Applications/Xcode.app`

`[$]> xcode-select --print-path`

> => /Applications/Xcode.app/Contents/Developer

## Init App

https://reactnative.dev/docs/environment-setup#creating-a-new-application

`[$]> npx react-native init MyTestApp`

`[$]> cd MyTestApp`

`[$]> cat .ruby-version`

> => 2.7.5

`[$]> RUBY_CONFIGURE_OPTS=--with-openssl-dir=$(brew --prefix openssl@1.1) rbenv install --skip-existing`

`[$]> bundle install`

`[$]> yarn`

## CocoaPods

https://reactnative.dev/docs/environment-setup#cocoapods

`[$]> cd ios`

`[$]> pod install`

Ignoring `ffi-1.13.1` because its extensions are not built. Try: `gem pristine ffi --version 1.13.1`

Ignoring `nokogiri-1.10.10` because its extensions are not built. Try: `gem pristine nokogiri --version 1.10.10`

```
Generating Pods project
/Users/andrewgerst/Code/Github/Gerst20051/ReactNative/MyTestApp/ios/Pods/Target Support Files/Pods-MyTestApp/Pods-MyTestApp.release.xcconfig
/Users/andrewgerst/Code/Github/Gerst20051/ReactNative/MyTestApp/ios/Pods/Target Support Files/Pods-MyTestApp/Pods-MyTestApp.debug.xcconfig
/Users/andrewgerst/Code/Github/Gerst20051/ReactNative/MyTestApp/ios/Pods/Target Support Files/Pods-MyTestApp-MyTestAppTests/Pods-MyTestApp-MyTestAppTests.release.xcconfig
/Users/andrewgerst/Code/Github/Gerst20051/ReactNative/MyTestApp/ios/Pods/Target Support Files/Pods-MyTestApp-MyTestAppTests/Pods-MyTestApp-MyTestAppTests.debug.xcconfig
Setting REACT_NATIVE build settings
Integrating client project
[!] Please close any current Xcode sessions and use `MyTestApp.xcworkspace` for this project from now on.
Pod installation complete! There are 56 dependencies from the Podfile and 47 total pods installed.
```

NOTE: CocoaPods is specified in the project `Gemfile` and is installed via bundler when running `bundle install`

`[$]> gem install cocoapods`

## Start Metro

https://reactnative.dev/docs/environment-setup#step-1-start-metro

`[$]> npx react-native start`

To reload the app press **"r"**

To open developer menu press **"d"**

https://facebook.github.io/metro

## Start App

https://reactnative.dev/docs/environment-setup#step-2-start-your-application

`[$]> cd ../`

`[$]> npx react-native run-ios`

To reload the app press **"Cmd + R"** in the simulator

To open developer menu press **"Cmd + D"** in the simulator

```
warn Multiple Podfiles were found: ios/Podfile,vendor/bundle/ruby/2.7.0/gems/cocoapods-core-1.11.3/lib/cocoapods-core/Podfile.
Choosing ios/Podfile automatically.
If you would like to select a different one, you can configure it via "project.ios.sourceDir".
You can learn more about it here: https://github.com/react-native-community/cli/blob/master/docs/configuration.md
info Found Xcode workspace "MyTestApp.xcworkspace"
info Launching iPhone 13 (iOS 15.5)
info Building (using "xcodebuild -workspace MyTestApp.xcworkspace -configuration Debug -scheme MyTestApp -destination id=4D959A2E-7F74-48A4-9960-91BB98A789A5")
⠹ Building the app........
success Successfully built the app
info Installing "/Users/andrewgerst/Library/Developer/Xcode/DerivedData/MyTestApp-fyqnbkoxrzsccrctwwdrzfqppdqa/Build/Products/Debug-iphonesimulator/MyTestApp.app"
info Launching "org.reactjs.native.example.MyTestApp"
success Successfully launched the app on the simulator
```

## React Native Debugger

https://reactnative.dev/docs/debugging#chrome-developer-tools

To debug the JavaScript code in Chrome, select "Debug with Chrome" from the Developer Menu. This will open a new tab.

http://localhost:8081/debugger-ui

## Standalone React Devtools

https://www.npmjs.com/package/react-devtools

Select "Show Inspector" from the Developer Menu to use the React Devtools.

When react-devtools is running, Inspector will enter a special collapsed mode, and instead use the DevTools as primary UI.

In this mode, clicking on something in the simulator will bring up the relevant components in the DevTools.

`[$]> npm install -g react-devtools`

`[$]> react-devtools`

`[$]> npx react-devtools`
