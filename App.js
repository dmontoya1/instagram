import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RutasNoAutenticadas } from './components/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './components/Autenticados/RutasAutenticadas';

console.disableYellowBox = ['Remote Debugger'];

export default class App extends React.Component {
  constructor() {
    super();
    this.setState = { name: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <RutasAutenticadas />
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
