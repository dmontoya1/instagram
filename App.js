import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { RutasNoAutenticadas } from './components/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './components/Autenticados/RutasAutenticadas';
import Store from './Store/Store';

console.disableYellowBox = ['Remote Debugger'];

export default class App extends React.Component {
  constructor() {
    super();
    this.setState = { name: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <RutasNoAutenticadas />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
  },
});
