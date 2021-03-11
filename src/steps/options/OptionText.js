import { Text, StyleSheet } from "react-native";

export default function OptionElement(props) {
  const styles = StyleSheet.create({
    text: {
      color: props.fontColor,
      fontSize: 14,
    },
  });

  return <Text style={styles.text}>{props.children}</Text>;
}
