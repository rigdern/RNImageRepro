# RNImageRepro

This test app consistently repros the React Native crash from [#10433](https://github.com/facebook/react-native/issues/10433) in the simulator. The app just rapidly hides and shows a few images.

### Repro Info

- React Native [5850165](https://github.com/facebook/react-native/tree/5850165795c54b8d5de7bef9f69f6fe6b1b4763d) (from master on Nov 23)
- iPhone 6s+ Simulator (iOS 9.2)
- Using RN packager
- Running app in debug mode

### Repro Steps

- Clone the repro app from https://github.com/rigdern/RNImageRepro
- Run `npm install`
- Run the app in the simulator
- Click the "Start" button

The app crashes in under a minute. Usually, it crashes on [one of these lines](https://github.com/facebook/react-native/blob/5850165795c54b8d5de7bef9f69f6fe6b1b4763d/Libraries/Image/RCTImageLoader.m#L387-L389) but I've seen it crash on a few other lines as well. Note that sometimes I see the images flickering and sometimes I don't see them at all. Both eventually result in a crash for me.
