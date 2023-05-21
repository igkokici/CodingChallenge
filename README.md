# Installation

- Run npm install to install all dependencies needed for the project to work.
- Install Expo Go app on your device and run npx expo start to generate a QR code, that needs to be scanned via camera on IOS device and Expo Go App in android

# CodingChallenge

1. Basic Architecture requirements
React-Native
Expo: Used expo (managed) version 47+ to make it easy for you and myself - so app can run inside Expo Go.
UI: Build custom components, but used @expo/vector-icons package, because I couldn't use some of the icons provided in Figma design.
State Management: react-redux and reduxjs/toolkit packages are used.
TypeScript: It is written in Typescript
For your information: I have only tested the app on my personal device, Iphone8+, because I don't have Android Studio and Xcode installed in my laptop (btw it is company's laptop :/)

2. UX/UI requirements
I tried to go as close as possible to the figma design provided to me and if I would have more time I would also create a context Theme so I could use fontFamilies, common fontSizes 
and colors included in the design. Now I have only included fontSizes and colors from design but are hardcoded.

# Description

This app includes two Stack Screens, 1-Overview Screen(Verstehen), 2-Article screen about the living(Wohnen), which are part of the TabBottom Navigator where only the second 
Tab Screen is available and others are disabled.

# Note

I could not test the call to local server because I was getting some errors, Network connection issues and I did not have time to investigate it to much
That's why you will find in the api some commented code and as response static response that I took from the server.
