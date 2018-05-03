import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-elements'

export class AppCard extends React.Component {
    constructor(props) {
        super(props);
        var imgLoc = ''
        switch (this.props.type) {
            case 'android':
                imgLoc = require('../res-img/android_logo.png')
                break;
            case 'ios':
                imgLoc = require('../res-img/ios_logo.png')
                break;
            case 'react-native':
                imgLoc = require('../res-img/react_logo.png')
                break;
            default:
                imgLoc = require('../res-img/other_logo.png')
        }
        this.state = {
            typeImg: imgLoc
        }
    }

    render() {
        return (
            <Card><View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16, marginRight:8, resizeMode:Image.resizeMode.contain }} source={this.state.typeImg} />
                <Text>{this.props.owner}/{this.props.title}</Text>
            </View></Card>
        );
    }
}