import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RutasNoAutenticadas } from './components/NoAutenticados/RutasNoAutenticadas';

export default class App extends React.Component {
  constructor() {
    super();
    this.setState = { name: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas />
        <Text>TESTTT</Text>
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
