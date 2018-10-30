import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
          title="Publicacion"
          onPress={() => { navigation.navigate('Publicacion'); }}
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
