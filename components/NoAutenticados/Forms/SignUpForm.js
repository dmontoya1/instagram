import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { auth } from '../../../Store/Services/Firebase';

const fieldName = (props) => {
  console.log('inputs');
  const { ph, input, meta } = props;
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={ph}
        onChangeText={input.onChange}
        value={input.value}
        keyboardType={input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(input.name === 'password' || input.name === 'password2')}
        onBlur={input.onBlur}
        underlineColorAndroid="rgba(0,0,0,0)"
      />
      <View style={styles.line} />
      {meta.touched && meta.error && <Text style={styles.errors}>{meta.error}</Text>}
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
  console.log('signupform');
  return (
    <View>
      <Field name="name" component={fieldName} ph="Nombre" />
      <Field name="email" component={fieldName} ph="correo@correo.com" />
      <Field name="password" component={fieldName} ph="contrasena" />
      <Field name="password2" component={fieldName} ph="confirmar contrasena" />
      <Button
        title="Registrar"
        onPress={props.handleSubmit(props.signup,
          // (values) => {
          //   console.log(values);
          //   auth.createUserWithEmailAndPassword(values.email, values.password)
          //     .then((success) => {
          //       console.log(success);
          //     })
          //     .catch((error) => {
          //       // Handle Errors here.
          //       const errorCode = error.code;
          //       const errorMessage = error.message;
          //       console.log(errorCode);
          //       console.log(errorMessage);
          //       // ...
          //     });
          // },
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: '#dcdcdc',
    height: 2,
  },
  errors: {
    color: '#ff0000',
  },
});


export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
