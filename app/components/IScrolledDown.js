import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

export default class IScrolledDown extends Component {
  render() {
    const img = require('../../img/favicon.png');
    return(
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Text style={{fontSize:96}}>What's the best</Text>
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Image source={img} />
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}

