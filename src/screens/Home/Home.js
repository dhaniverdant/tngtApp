import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

export default class Home extends Component {
    render(){
      const welcomeText = 'W E L C O M E !'
      
        return(
            <View>
                <Image
                    source={require('../../assets/images/gunung_tambora.jpg')}
                    style={ styles.imgBackground }
                >
                  <Text style={styles.textStyle}>{welcomeText}</Text>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    textStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
