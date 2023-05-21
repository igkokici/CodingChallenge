import { Platform } from "react-native"

export const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 2,
    },
    android: {
      elevation: 4,
    },
});