import React from 'react';
import { TextInput, StyleSheet, Dimensions, Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function CustomTextInput({
  placeholder,
  onChangeText,
  value,
  error,
  style,
  multiline,
  numberOfLines,
  textInputStyle,
}) {
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { ...style }]}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          error={error}
          style={[styles.textInput, { ...textInputStyle }]}
          placeholderTextColor="grey"
          multiline={multiline || false}
          numberOfLines={numberOfLines || 1}
        />
        {error && <Text style={{ fontSize: 10, color: 'red' }}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    color: 'black',
    height: 40,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: '#B746A8',
    color: 'black',
    height: 40,
    width: screenWidth / 1.1,
    backgroundColor: 'white',
  },
  textInput: {
    color: 'black',
    padding: 10,
    backgroundColor: 'white',
  },
});
