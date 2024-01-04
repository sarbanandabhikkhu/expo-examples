# React Native Navigation

React Native Stack and Tab Navigation using Expo CLI EAS Build System.

## Install & Run this Project

```bash
# Clone GitHub repo
git clone https://github.com/sarbanandabhikkhu/expo-examples.git
```

```bash
# Navigate to the project directory
cd expo-examples
```

```bash
# Checkout to the branch
git checkout navigation
```

```bash
# Install dependencies
npx install
# or
yarn install
```

```bash
# Run project
npx start
# or
yarn start
```

## Build Project using EAS CLI tool

```bash
# Install EAS-CLI globally
npm install -g eas-cli
```

```bash
# Login your account
eas login
```

```bash
# Confirm login
eas whoami
```

```bash
# Development build
npm run build-dev
# or
yarn run build-dev
```

```bash
# Production build
npm run build-prod
# or
yarn run build-prod
```

```bash
# Preview build
npm run build-prev
# or
yarn run build-prev
```

```bash
# Build release mode
npx react-native build-android --mode=release
# or
yarn react-native build-android --mode=release
```

## Create a brand new project

```bash
# Create new Expo project & Navigate to the project directory
npx create-expo-app new-app && cd new-app
# or
yarn create-expo-app new-app && cd new-app
```

```bash
# Pre requisites
pkg install nodejs
pkg install yarn
pkg install git
pkg upgrade
```

```bash
# Install dependencies as you needed
npx expo install <package>
yarn expo install <package>
```

```bash
# Dependencies
@react-navigation/native
@react-navigation/native-stack
@react-navigation/stack
@react-navigation/drawer
@react-navigation/bottom-tabs
react-native-safe-area-context
react-native-gesture-handler
react-native-reanimated
react-native-screens
@expo/vector-icons
expo-splash-screen
expo-font
```

### More details

- [Expo CLI](https://docs.expo.dev/more/expo-cli/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
