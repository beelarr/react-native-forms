import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean,
  birthdate: t.Date
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'dark-red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
};

const options = {
  order: ['username', 'email', 'password', 'birthdate', 'terms'],
  auto: 'placeholders',
  fields: {
    email: {
      error: 'When you forget your password we will not be able to help'
    },
    password: {
      error: "Choose something you'll actually remember",
      password: true,
      help: '6 characters of any combination'
    },
    terms: {
      label: 'Agree to Terms'
    },
    birthdate: {
      label: 'Enter your birthdate'
    }
  },
  stylesheet: formStyles
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('Value', value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Form type={User} ref={c => (this._form = c)} options={options} />
        <Button title="Sign Up!" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
