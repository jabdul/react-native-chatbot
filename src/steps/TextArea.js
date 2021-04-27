import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from './common/TextInput';

function errorParser(errors, touched, key) {
  return errors[key] && touched[key] && errors[key];
}

const screenWidth = Dimensions.get('window').width;

export default function TextArea(props) {
  const { triggerNextStep } = props;

  const schema = Yup.object().shape({
    description: Yup.string().required('Please type your address').trim(),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          description: '',
        }}
        validationSchema={schema}
        enableReinitialize={true}
        onSubmit={(values) => {
          triggerNextStep({ value: values.description });
        }}>
        {(props) => {
          const { handleChange, values, handleSubmit, errors, touched } = props;

          return (
            <View style={styles.form}>
              <View style={{ margin: 15 }}>
                <TextInput
                  placeholder="Description"
                  onChangeText={handleChange('description')}
                  value={values.address}
                  multiline
                  numberOfLines={5}
                  error={errorParser(errors, touched, 'description')}
                  style={{ minHeight: 120, borderRadius: 5 }}
                />
              </View>

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>SEND</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  form: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: screenWidth,
    backgroundColor: '#EFEFFD',
    // margin: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#B746A8',
    padding: 18,
    justifyContent: 'center',
    marginTop: 100,
  },
});

TextArea.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};
