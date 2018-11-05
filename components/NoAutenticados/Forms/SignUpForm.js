import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = (props) => {
  console.log(props);
  return (
    <View>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'password2')}
      />
      {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  } else if (values.name.length < 5) {
    errors.name = 'El nombre debe contener al menos 5 caractetes';
  } else if (values.name.length > 10) {
    errors.name = 'El nombre debe contener maximo 10 caracteres';
  }

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

  if (!values.password2) {
    errors.password2 = 'Debes confirmar tu contrasena';
  } else if (values.password !== values.password2) {
    errors.password2 = 'Las contrasenas no coinciden';
  }

  return errors;
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

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
