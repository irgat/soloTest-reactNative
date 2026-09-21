SoloTest React Native
---

React Native TypeScript Code Example

### About:

A peg solitaire game for tablets, built with React Native and Expo.

### Prerequisites:

- [nvm](https://nodejs.org/en/download/package-manager)
  ```
  $ nvm install 24
  $ nvm use 24
  ```

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install)
  ```
  $ npm install --global yarn
  ```

#### iOS:

- [Xcode](https://developer.apple.com/xcode/), with the iOS platform installed

#### Android:

- [Android Studio](https://developer.android.com/studio), installed with the Standard setup

- A tablet virtual device, created in Android Studio's Device Manager

- Android SDK paths in your shell profile, such as `~/.zshrc`
  ```
  $ cat >> ~/.zshrc <<'EOF'
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  EOF
  ```
  Then open a new terminal.

### How to set up:

```
$ git clone https://github.com/irgat/soloTest-reactNative.git soloTest-reactNative
$ cd soloTest-reactNative
$ yarn
```

### Dev mode:

```
$ yarn start
```

Press `i` for iOS or `a` for Android. Use `shift`+`i` or `shift`+`a` to pick a specific device.

Alternatively, run a target device directly:

```
$ yarn ios
```

```
$ yarn android
```

### Production build:

```
$ yarn expo export
```

The build output goes to `dist`. This is a JavaScript bundle, not an installable app.
