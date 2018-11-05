import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = (props) => {
  console.log(props);
  const { ph, input, meta } = props;
  return (
    <View>
      <TextInput
        placeholder={ph}
        onChangeText={input.onChange}
        value={input.value}
        keyboardType={input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(input.name === 'password' || input.name === 'password2')}
        onBlur={input.onBlur}
      />
      {meta.touched && meta.error && <Text>{meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'El correo es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'El correo ingresado no es valido';
  }

  if (!values.password) {
    errors.password = 'La contrasena es requerida';
  } else if (values.password.length < 5) {
    errors.password = 'La contrasena debe tener al menos 5 caracteres';
  }

  return errors;
};


const SignInForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="email" component={fieldName} ph="correo@correo.com" />
      <Field name="password" component={fieldName} ph="******" />
      <Text>Redux Form</Text>
      <Button
        title="Iniciar Sesion"
        onPress={props.handleSubmit((values) => {
          console.log(values);
        })}
      />
    </View>
  );
};

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
