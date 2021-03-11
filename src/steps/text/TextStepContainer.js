import { View, StyleSheet } from "react-native";

export default function TextStepContainer(props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: props.user ? "row-reverse" : "row",
      alignItems: "flex-end",
      width: "100%",
    },
  });

  return <View style={styles.container}>{props.children}</View>;
}
