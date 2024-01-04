# React Native Navigation

React Native Stack and Tab Navigation using Expo CLI EAS Build System.

## Install & Run this Project

**Clone GitHub repo**

```bash
git clone https://github.com/sarbanandabhikkhu/expo-examples.git
```

**Navigate to the project directory**

```bash
cd expo-examples
```

**Checkout to the branch**

```bash
git checkout navigation
```

**Install dependencies**

```bash
npx install
# or
yarn install
```

**Run project**

```bash
npx start
# or
yarn start
```

## Build Project using EAS CLI tool

**Install EAS-CLI globally**

```bash
npm install -g eas-cli
```

**Login your account**

```bash
eas login
```

**Confirm login**

```bash
eas whoami
```

**Development build**

```bash
npm run build-dev
# or
yarn run build-dev
```

**Production build**

```bash
npm run build-prod
# or
yarn run build-prod
```

**Preview build**

```bash
npm run build-prev
# or
yarn run build-prev
```

**Build release mode**

```bash
npx react-native build-android --mode=release
# or
yarn react-native build-android --mode=release
```

### Create new Expo Project

**Create & Navigate to the project directory**

```bash
npx create-expo-app new-app && cd new-app
# or
yarn create-expo-app new-app && cd new-app
```

**Pre requisites**

```bash
pkg install nodejs
pkg install yarn
pkg install git
pkg upgrade
```

**Install dependencies as you needed**

```bash
npx expo install <package>
yarn expo install <package>
```

**Suggest Dependencies**

```bash
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
- [React Navigation](https://reactnavigation.org/)
