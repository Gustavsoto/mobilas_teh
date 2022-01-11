import React from 'react';
import {Text, View, Image } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello world from Group 7</Text>
      <Text>Member: Daniela Rozmisa</Text>
      <text>This is my Daniela Rozmisa</text>
      <text>first React Native application!</text>
      <text>nice to see you here.</text>
      <Image style={{width:150, height:200}}
        source={require('./assets/daniela_bilde.PNG')}
      />
    </View>
  )
}
export default HelloWorldApp;