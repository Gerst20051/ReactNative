# ReactNative

Collection of React Native Apps

## Init

[$]> npx react-native init MyTestApp
[$]> cd MyTestApp
[$]> cat .ruby-version
=> 2.7.5

[$]> RUBY_CONFIGURE_OPTS=--with-openssl-dir=$(brew --prefix openssl@1.1) rbenv install --skip-existing
[$]> cd ios
[$]> gem install cocoapods

[$]> pod install
Ignoring ffi-1.13.1 because its extensions are not built. Try: gem pristine ffi --version 1.13.1
Ignoring nokogiri-1.10.10 because its extensions are not built. Try: gem pristine nokogiri --version 1.10.10

patching file config.sub
checking for a BSD-compatible install... /usr/local/bin/ginstall -c
checking whether build environment is sane... yes
checking for arm-apple-darwin-strip... no
checking for strip... strip
checking for a thread-safe mkdir -p... /usr/local/bin/gmkdir -p
checking for gawk... no
checking for mawk... no
checking for nawk... no
checking for awk... awk
checking whether make sets $(MAKE)... yes
checking whether make supports nested variables... yes
checking for arm-apple-darwin-gcc... /Library/Developer/CommandLineTools/usr/bin/cc -arch arm64 -isysroot
checking whether the C compiler works... no
xcrun: error: SDK "iphoneos" cannot be located
xcrun: error: SDK "iphoneos" cannot be located
xcrun: error: SDK "iphoneos" cannot be located
xcrun: error: unable to lookup item 'Path' in SDK 'iphoneos'
/Users/andrewgerst/Library/Caches/CocoaPods/Pods/External/glog/2263bd123499e5b93b5efe24871be317-3d02b/missing: Unknown `--is-lightweight' option
Try `/Users/andrewgerst/Library/Caches/CocoaPods/Pods/External/glog/2263bd123499e5b93b5efe24871be317-3d02b/missing --help' for more information
configure: WARNING: 'missing' script is too old or missing
configure: error: in `/Users/andrewgerst/Library/Caches/CocoaPods/Pods/External/glog/2263bd123499e5b93b5efe24871be317-3d02b':
configure: error: C compiler cannot create executables
See `config.log' for more details

[$]> cd ../
[$]> npx react-native run-ios
