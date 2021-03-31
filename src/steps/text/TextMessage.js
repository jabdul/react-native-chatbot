import { Text, StyleSheet } from 'react-native';

export default function TextMessage(props) {
  const styles = StyleSheet.create({
    container: {
      fontSize: 14,
      color: props.fontColor,
    },
  });

  return <Text style={styles.container}>{props.children}</Text>;
}
