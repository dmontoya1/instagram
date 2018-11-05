import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = (props) => {
  console.log(props);
  return (
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'password2')}
    />
  );
};
const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="name" component={fieldName} ph="Nombre" />
      <Field name="email" component={fieldName} ph="correo@correo.com" />
      <Field name="password" component={fieldName} ph="******" />
      <Field name="password2" component={fieldName} ph="******" />
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
