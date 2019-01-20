import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';

export default class SplashPage extends Component {

    componentWillMount () {
        const navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'Home'
            });
        }, 5000) 
    }
    render () {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image style={{position: 'absolute', left: 0, top: 0 }} source={require('../../assets/images/splash.png')}></Image>
            </View>
        );
    }
}
