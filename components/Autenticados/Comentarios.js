import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

export default class Comentarios extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Comentarios </Text>
        <Button
          title="Autores"
          onPress={() => { navigation.navigate('Autor'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
