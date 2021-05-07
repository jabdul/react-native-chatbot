import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Option from './common/Option';

export default function CameraStep(props) {
  const { triggerNextStep, optionStyle, step } = props;

  const options = [
    {
      label: 'Upload Images',
      onPress: () => {
        launchImageLibrary({}, (res) => {
          triggerNextStep({ value: res });
        });
      },
    },
    {
      label: 'Take Picture',
      onPress: () => {
        launchCamera({}, (res) => {
          triggerNextStep({ value: res });
        });
      },
    },
  ];

  return (
    <View style={styles.body}>
      {options.map((item, index) => (
        <Option
          key={item.label}
          label={item.label}
          alt={!index}
          onPress={item.onPress}
          theme={optionStyle}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
});

CameraStep.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};
