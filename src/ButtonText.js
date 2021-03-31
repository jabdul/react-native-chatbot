import { Text, StyleSheet } from 'react-native';

export default function Button(props) {
  const styles = StyleSheet.create({
    text: {
      color: props.invalid ? '#FFF' : props.fontColor,
      fontSize: 14,
    },
  });

  return <Text style={styles.text}>{props.children}</Text>;
}
