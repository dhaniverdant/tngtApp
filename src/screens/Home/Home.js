import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { estyles } from './style/HomeStyle'

export default class Home extends Component {
  render(){
    const welcomeText = 'W E L C O M E !'
    const mainImage = require('../../assets/images/gunung_tambora.jpg')

    return(
      <View>
        <Image
          source={mainImage}
          style={ estyles.imgBackground }
        >
        </Image>
      </View>
    )
  }
}
