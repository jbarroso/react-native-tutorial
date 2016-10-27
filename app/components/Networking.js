import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

export default class Networking extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => { 
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ dataSource: ds.cloneWithRows(responseJson.movies) });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title} {rowData.year}</Text>}
        />
      </View>
    );
  }
}
