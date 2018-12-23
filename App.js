import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './src/screens/Home/Home';

export default class App extends Component {
  render() {
    return (
      <View>
        <Home/>
      </View>
    );
  }
}