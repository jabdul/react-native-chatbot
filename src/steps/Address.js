import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextInput from './common/TextInput';

const screenWidth = Dimensions.get('window').width;

function errorParser(errors, touched, key) {
  return errors[key] && touched[key] && errors[key];
}

const states = [
  { label: 'LA', value: 'lagos' },
  { label: 'FC', value: 'abuja' },
  { label: 'OY', value: 'oyo' },
];

const schema = Yup.object().shape({
  address: Yup.string().required('Please type your address').trim(),
  city: Yup.string().required('Please type your city').trim(),
  state: Yup.string().required('Please select your state').trim(),
  zipcode: Yup.string().required('Please type your zipcode').trim(),
});

export default function AddressInput(props) {
  const { triggerNextStep, optionStyle, step } = props;

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          address: '',
          city: '',
          state: '',
          zipcode: '',
        }}
        validationSchema={schema}
        enableReinitialize={true}
        onSubmit={(values) => {
          const address = `${values.address} ${values.city} ${values.state} ${values.zipcode}`;
          triggerNextStep({ value: address });
        }}>
        {(props) => {
          const { handleChange, values, handleSubmit, errors, touched } = props;

          return (
            <View style={styles.form}>
              <Text style={styles.header} bold>
                Enter Witness Address
              </Text>
              <TextInput
                placeholder="Address"
                onChangeText={handleChange('address')}
                value={values.address}
                error={errorParser(errors, touched, 'address')}
              />
              <TextInput
                placeholder="City"
                onChangeText={handleChange('city')}
                value={values.city}
                error={errorParser(errors, touched, 'city')}
              />

              <View style={styles.row}>
                <View style={styles.inputAndroid}>
                  <RNPickerSelect
                    placeholder={{ label: 'State', value: null }}
                    onValueChange={handleChange('state')}
                    items={states}
                    value={values.state}
                    useNativeAndroidPickerStyle={true}
                  />
                </View>

                <TextInput
                  placeholder="Zipcode"
                  onChangeText={handleChange('zipcode')}
                  value={values.zipcode}
                  error={errorParser(errors, touched, 'zipcode')}
                  style={styles.smallTextInput}
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
    padding: 20,
    width: screenWidth,
    backgroundColor: '#EFEFFD',
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
    fontWeight: '600',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth / 1.1,
  },
  smallTextInput: {
    width: screenWidth / 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#B746A8',
    padding: 18,
    justifyContent: 'center',
    marginTop: 20,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: '#F2F2F2',
    borderColor: 'gray',
    color: 'black',
    width: screenWidth / 2.5,
    height: 40,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 13,
    width: screenWidth / 2.5,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#B746A8',
    color: 'black',

});
