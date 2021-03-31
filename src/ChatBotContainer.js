import { View, StyleSheet } from 'react-native';

export default function ChatBotContainer(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f8fb',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
});
