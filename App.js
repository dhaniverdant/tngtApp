import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
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
      <View style={styles.ViewStyle}>
        <Home Icon="open-book"/>
      </View>
    );
  }
}

class AboutTngtScreen extends React.Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
      <AboutTngt />
      </View>
      );
    }
  }
  
class BookingScreen extends React.Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Booking />
      </View>
    );
  }
}

class GalleryScreen extends React.Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Gallery />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  ViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutTngtScreen },
  Booking: { screen: BookingScreen },
  Gallery: { screen: GalleryScreen },
  Profile: { screen: ProfileScreen }
});

export default createAppContainer(TabNavigator);