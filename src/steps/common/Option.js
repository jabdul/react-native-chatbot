import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Option({ alt, onPress, theme, label }) {
  const styles = useStyle(theme);

  return (
    <TouchableOpacity style={[styles.options, alt && styles.altOptions]} onPress={onPress}>
      <View>
        <Text style={[styles.text, alt && styles.altText]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const useStyle = (theme) =>
  StyleSheet.create({
    options: {
      padding: 18,
      backgroundColor: theme.backgroundColor,
      width: Dimensions.get('screen').width / 2,
    },
    altOptions: {
      backgroundColor: '#EFEFFD',
    },
    text: {
      color: 'white',
      fontSize: 13,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '600',
    },
    altText: {
      color: theme.backgroundColor,
    },
  });
