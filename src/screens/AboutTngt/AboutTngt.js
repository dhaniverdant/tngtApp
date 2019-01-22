import React, {Component} from 'react'
import {Text} from 'react-native'
import {Card} from 'react-native-elements'
import Swipeout from 'react-native-swipeout'

export default class AboutTngt extends Component {

  render() {
  	var swipeoutBtns = [
		  {
		    text: 'Button'
		  }
		]
    return (
      <Swipeout right={swipeoutBtns} left={swipeoutBtns} >
			  <Card style={{ height: 50, width: 200 }}>
			    <Text>Swipe me left</Text>
			  </Card>
			</Swipeout>
    )
  }
}
