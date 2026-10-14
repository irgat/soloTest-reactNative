SoloTest React Native
---

[![ci](https://github.com/irgat/soloTest-reactNative/actions/workflows/ci.yml/badge.svg)](https://github.com/irgat/soloTest-reactNative/actions/workflows/ci.yml)

React Native TypeScript Code Example

### About:

A peg solitaire game for tablets, built with React Native and Expo.

### Prerequisites:

- [nvm](https://nodejs.org/en/download/package-manager)

  ```
  $ nvm install
  $ nvm use
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

### Tests:

```
$ yarn test
```

With a coverage report, written to `coverage`:

```
$ yarn test:coverage
```

### Before committing:

```
$ yarn verify
```

This runs the linter, the format check, the type check and the tests. The linter treats warnings as errors. If the format check fails, run `yarn format`.

### Workflows:

- **`ci.yml`** runs on every push and pull request. It runs the four checks above, plus a dependency check with `yarn expo-doctor` and a production build with `yarn expo export`.
- **`expo-patches.yml`** runs daily, and opens a pull request when `yarn expo install --fix` finds the Expo packages have drifted from the versions the installed SDK expects. It can also be run by hand from the Actions tab.
- **`review.yml`** runs a Claude review on pull requests. It is off unless `CLAUDE_REVIEW` and `CLAUDE_CODE_OAUTH_TOKEN` are set on the repository.
