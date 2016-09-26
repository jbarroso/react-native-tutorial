import React, { Component } from 'react';
import { Navigator, Text, View } from 'react-native';

import MyScene from './MyScene';
export default class SimpleNavigation extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
            <MyScene
              title={route.title}
              onForward={ () => {    
                // Function to call when a new scene should be displayed           
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}
              onBack={() => {
                // Function to call to go back to the previous scene
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
        }
      />
    )
  }
}
