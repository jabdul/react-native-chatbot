import { View, StyleSheet } from 'react-native';

export default function Footer(props) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: props.invalid ? '#E53935' : props.color,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
}
