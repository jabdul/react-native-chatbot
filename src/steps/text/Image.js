import { Image, StyleSheet } from "react-native";

export default function Img(props) {
  return <Image style={styles.container} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 21,
  },
});
