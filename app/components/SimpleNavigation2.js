import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

class SimpleNavigation2 extends Component {

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  getNavigatorBar() {
    return (
      <Navigator.NavigationBar routeMapper={
        {
          LeftButton: (route, navigator, index, navState) => { 
            if (index > 0 ) {
              return (
                <Text style={ styles.text } onPress={() => navigator.pop()}>
                  &larr;
                </Text>
              ); 
            }
            return <Text/>; 
          },
          RightButton: (route, navigator, index, navState) => { 
            return <Text/>; 
          },
          Title: (route, navigator, index, navState) => { 
            return (<Text style={ styles.text }>{route.title}</Text>); 
          }
        }
      }
    />
    );
  }
  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{ component: One, title: "One" }}
        navigationBar={this.getNavigatorBar()}
      />
    );
  }
}

class One extends Component {

  _navigate() {
    this.props.navigator.push({
      component: Two,
      title: "Two"
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Hello From One</Text>
        <TouchableHighlight onPress={() => this._navigate() } style={ styles.button }>
          <Text>Go To Two</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class Two extends Component {

  _navigate() {
    this.props.navigator.push({
      component: Three,
      title: "Three"
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Hello From Two</Text>
        <TouchableHighlight onPress={()=> this._navigate() } style={ styles.button }>
          <Text>Go To Three</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class Three extends Component {

  _navigate() {
    this.props.navigator.push({
      component: Four,
      title: "Four"
    })
  }

  _goForward(){
    this.props.navigator.jumpForward() // THROWS ERROR IF NO FUTURE ROUTE IN STACK
  }

  _resetRouteStack() {
    this.props.navigator.immediatelyResetRouteStack([{ component: One }, { component: Four }]) /* Reset every scene with an array of routes */
  }

  render() {
    return (

      <View style={ styles.container }>
        <Text style={ styles.text }>Hello From Three</Text>
        <TouchableHighlight onPress={() => this._navigate() } style={ styles.button }>
          <Text>Go To Four</Text>
        </TouchableHighlight> 

        <TouchableHighlight onPress={() => this._goForward() } style={ styles.button }>
          <Text>Go Forward</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._resetRouteStack() } style={ styles.button }>
          <Text>RESET ROUTE STACK</Text>
        </TouchableHighlight>     
      </View>
    )
  }
}

class Four extends Component {

  _navigate() {
    // this.props.navigator.resetTo({ component: One })
    // this.props.navigator.jumpBack()
    // console.log(this.props.navigator.getCurrentRoutes)
    // this.props.navigator.replace({ component: Two })
    // this.props.navigator.replaceAtIndex({ component: One}, 2)
    // this.props.navigator.replacePrevious({ component: One })
    this.props.navigator.popToTop()
  }

  _goBack(){
    this.props.navigator.jumpBack() // JUMPS BACK WITHOUT REMOVING ROUTE FROM STACK
  } 

  _pop(){
    this.props.navigator.pop() // REMOVES ROUTE FROM STACK
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Hello From Four</Text>
        <TouchableHighlight onPress={() => this._navigate() } style={ styles.button }>
          <Text>CUSTOM METHOD</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._goBack() } style={ styles.button }>
          <Text>Jump Back</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._pop() } style={ styles.button }>
          <Text>Pop Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:20
  },
  button: {
    backgroundColor: '#efefef',
    height:50,
    width:300,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  }
});

export default SimpleNavigation2;
