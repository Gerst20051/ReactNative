# ReactNative

Collection of React Native Apps

## Setup Xcode

https://reactnative.dev/docs/environment-setup#command-line-tools

Xcode → Preferences → Locations → Locations → Command Line Tools: Xcode 13.4.1 (13F100) (/Applications/Xcode.app)

`[$]> sudo xcode-select --switch /Applications/Xcode.app`

`[$]> xcode-select --print-path`

=> /Applications/Xcode.app/Contents/Developer

## Init App

https://reactnative.dev/docs/environment-setup#creating-a-new-application

`[$]> npx react-native init MyTestApp`

`[$]> cd MyTestApp`

`[$]> cat .ruby-version`

=> 2.7.5

`[$]> RUBY_CONFIGURE_OPTS=--with-openssl-dir=$(brew --prefix openssl@1.1) rbenv install --skip-existing`

`[$]> bundle install`

`[$]> yarn`

## CocoaPods

https://reactnative.dev/docs/environment-setup#cocoapods

`[$]> cd ios`

`[$]> pod install`

Ignoring ffi-1.13.1 because its extensions are not built. Try: gem pristine ffi --version 1.13.1

Ignoring nokogiri-1.10.10 because its extensions are not built. Try: gem pristine nokogiri --version 1.10.10

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

## Start App

https://reactnative.dev/docs/environment-setup#step-2-start-your-application

`[$]> cd ../`

`[$]> npx react-native run-ios`
