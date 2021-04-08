import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import PropTypes from 'prop-types';

export default function RadioInputStep(props) {
  const styles = useStyle(props);
  const [index, setIndex] = useState(0);

  const { step, triggerNextStep } = props;
  const { radios, label } = step;

  const handleDone = () => {
    const item = radios[index];
    triggerNextStep(item);
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.label}>{label} </Text>

        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.done}>Done </Text>
        </TouchableOpacity>
      </View>

      <RadioForm formHorizontal={false} animation={true}>
        {radios.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i} style={styles.radioItem}>
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={() => setIndex(i)}
              labelStyle={{ fontSize: 14, color: '#828282' }}
              labelWrapStyle={{}}
            />
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={index === i}
              onPress={() => setIndex(i)}
              borderWidth={1}
              buttonInnerColor="#B746A8"
              buttonOuterColor={index === i ? '#2196f3' : 'black'}
              buttonSize={10}
              buttonOuterSize={14}
              buttonStyle={{}}
              buttonWrapStyle={{ padding: 5 }}
            />
          </RadioButton>
        ))}
      </RadioForm>
    </View>
  );
}

const useStyle = (props) =>
  StyleSheet.create({
    body: {
      display: 'flex',
      backgroundColor: '#EFEFFD',
      justifyContent: 'space-around',
    },
    header: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    label: {
      fontSize: 12,
    },
    done: {
      fontSize: 12,
      color: '#B746A8',
      fontWeight: '600',
    },
    radioItem: {
      borderBottomColor: '#E0E0E0',
      borderBottomWidth: 1,
      paddingBottom: 10,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width,
    },
  });

RadioInputStep.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};
