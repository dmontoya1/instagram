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
        <Text> SignUp </Text>
        <SignUpForm />
        <Button
          title="Aumentar"
          onPress={this.props.add}
        />
        <Button
          title="SignIn"
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
    alignItems: 'center',
    backgroundColor: '#2c3e50',
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
