import React, { Component } from 'react';
import { Image } from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let filePic = require('../../img/Bananavarieties.jpg');
        return (
            <Image source={filePic} style={{width: 193, height: 110}}/>
        );
    }
}

export default Bananas;
