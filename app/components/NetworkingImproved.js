import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View, TouchableHighlight, ActivityIndicator} from 'react-native';

class NetworkingImproved extends Component {

    constructor(props) {
        super(props);
        this.state={
            loading: false,
            movies: this.getMoviesDs([]),
        };
    }

    getMoviesDs(movies) {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(movies);
    }

    getMoviesFromApiAsync() {
        this.setState({
            loading: true,
        })
        return fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                setTimeout(() =>
                        this.setState({
                            loading: false,
                            movies: this.getMoviesDs(responseJson.movies)
                        }), 3000);
            })
            .catch((error) => {
                console.error(error);
            }).done();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.getMoviesFromApiAsync()} style={ styles.button }>
                    <Text>Load Movies</Text>
                </TouchableHighlight>

                <View style={styles.moviesContainer}>
                    <Movies loading={this.state.loading} movies={this.state.movies} />
                </View>
            </View>
        );
    }
}

class Movies extends Component {
    render() {
        if (this.props.loading) {
            return (
                <View style={styles.progressContainer}>
                    <ActivityIndicator color="#efefef" size="large"/>
                </View>
            );
        }
        return (
            <ListView contentContainerStyle={styles.list}
                enableEmptySections={true}
                dataSource={this.props.movies}
                renderRow={(rowData) => <Movie movie={rowData}/>}
            />
        );
    }
}

class Movie extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Text>{this.props.movie.releaseYear} - {this.props.movie.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    moviesContainer: {
        flex: 1,
        margin:10
    },
    progressContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    list: {
    },
    item: {
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
    },
    text: {
    },
    button: {
        backgroundColor: '#efefef',
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    }
});

export default NetworkingImproved;
