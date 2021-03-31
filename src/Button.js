import { TouchableOpacity, StyleSheet } from 'react-native';

export default function Button(props) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      height: 50,
      backgroundColor: props.invalid ? '#E53935' : props.backgroundColor,
    },
  });

  return <TouchableOpacity style={styles.container}>{props.children}</TouchableOpacity>;
}
