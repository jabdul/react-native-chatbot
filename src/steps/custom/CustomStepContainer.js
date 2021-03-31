import { View, StyleSheet } from 'react-native';

export default function ChatStepContainer(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    marginHorizontal: 6,
    padding: 16,
  },
});
