import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = props => (
  //   console.log(props);
  <TextInput
    placeholder="Texto desde field nombre"
    onChangeText={props.input.onChange}
    value={props.input.value}
  />
);
const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="first_name" component={fieldName} />
      <Field name="email" component={fieldName} />
      <Text>Redux Form</Text>
      <Button
        title="Registrar"
        onPress={props.handleSubmit((values) => {
          console.log(values);
        })}
      />
    </View>
  );
};

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
