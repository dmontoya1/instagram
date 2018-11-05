import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Forms/SignUpForm';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.number);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm />
        <Button
          title="Iniciar Sesion"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

const mapStateToProps = state => ({
  number: state.reducerTest,
});

const mapDispatchToProps = dispatch => ({
  add: () => {
    dispatch({ type: 'ADD_REDUCER_TEST' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
