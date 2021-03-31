import { View, StyleSheet } from 'react-native';

export default function ImageContainer(props) {
  const styles = StyleSheet.create({
    container: {
      padding: 2,
      margin: 6,
      marginBottom: 10,
      backgroundColor: '#fff',
      borderColor: '#ddd',
      borderWidth: 1,
      borderTopRightRadius: 21,
      borderTopLeftRadius: 21,
      borderBottomRightRadius: props.user ? 21 : 0,
      borderBottomLeftRadius: props.user ? 0 : 21,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
}
