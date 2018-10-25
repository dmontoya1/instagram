import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


const SignIn = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View>
      <Text>Componente SignIn</Text>
      <Button
        title="Navegar a SignUp"
        onPress={() => { navigation.navigate('SignUp'); }}
      />
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Componente SignUp</Text>
      <Button
        title="Regresar"
        onPress={() => { navigation.goBack(); }}
      />
    </View>
  );
};


const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});

export { RutasNoAutenticadas };
