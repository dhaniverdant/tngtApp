import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './src/screens/Home/Home';
import AboutTngt from './src/screens/AboutTngt/AboutTngt';
import Booking from './src/screens/Booking/Booking';
import Gallery from './src/screens/Gallery/Gallery';
import Profile from './src/screens/Profile/Profile';

let screen = Dimensions.get('window');
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
}

class AboutTngtScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AboutTngt />
      </View>
      );
    }
  }
  
class BookingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Booking />
      </View>
    );
  }
}

class GalleryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Gallery />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Profile />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutTngtScreen },
  Booking: { screen: BookingScreen },
  Gallery: { screen: GalleryScreen },
  Profile: { screen: ProfileScreen }
});

export default createAppContainer(TabNavigator);