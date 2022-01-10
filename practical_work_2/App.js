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
      <Text>Member: Gustavs Oto Cers</Text>
      <text>This is my Gustavs Oto Cers</text>
      <text>first React Native application!</text>
      <text>nice to see you here.</text>
      <Image style={{width:150, height:200}}
        source={require('./assets/WhatsApp Image 2022-01-10 at 18.29.50.jpeg')}
      />
    </View>
  )
}
export default HelloWorldApp;