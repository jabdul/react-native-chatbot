import { View, StyleSheet } from 'react-native';

export default function OptionElement(props) {
  const styles = StyleSheet.create({
    container: {
      padding: 12,
      borderRadius: 22,
      backgroundColor: props.bubbleColor,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
}
