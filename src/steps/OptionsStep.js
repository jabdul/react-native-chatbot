import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Option from './common/Option';

export default function OptionsStep(props) {
  const { step, triggerNextStep, optionStyle } = props;
  const { options } = step;

  return (
    <View style={style.body}>
      {options.map((item, index) => (
        <Option
          label={item.label}
          alt={!index}
          onPress={() => triggerNextStep({ value: item.value })}
          theme={optionStyle}
        />
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
});

OptionsStep.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};
