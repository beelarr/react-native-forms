import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    terms: {
      label: 'Agree to Terms'
    },
    username: {
      label: 'Your username - Avoid Snarkey'
    }
  }
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
