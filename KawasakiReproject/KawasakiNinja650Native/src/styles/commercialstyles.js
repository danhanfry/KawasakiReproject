import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  debugText: {
      color: "#fff",
  },
  mask: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    zIndex: 500,
    position: "relative",
  },
  glossArrow: {
      position: "absolute",
      opacity: 0.5,
      width: 50,
      height: 50
  },
  playArrow: {
    position: "absolute",
    top: 28,
    left: 40,
  }
});
