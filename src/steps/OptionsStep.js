import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default function OptionsStep(props) {
  const styles = useStyle(props);
  const { step } = props;
  const { options } = step;

  return (
    <View style={styles.body}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={item.value}
          style={[styles.options, !index && styles.altOptions]}
          onPress={() => props.triggerNextStep({ value: item.value })}>
          <View>
            <Text style={[styles.text, !index && styles.altText]}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const useStyle = (props) =>
  StyleSheet.create({
    body: {
      display: 'flex',
      flexDirection: 'row',
    },
    options: {
      padding: 18,
      backgroundColor: props.optionStyle.backgroundColor,
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
      color: props.optionStyle.backgroundColor,
    },
  });

OptionsStep.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};
