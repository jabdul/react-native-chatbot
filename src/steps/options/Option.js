import { TouchableOpacity, StyleSheet } from "react-native";

export default function Option(props) {
  return (
    <TouchableOpacity style={styles.container}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
});
