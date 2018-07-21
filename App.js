/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Search from "./src/search";
import Result from "./src/result";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            resultMeaning: null,
            resultSentence: null
        };
    }


    resultMeaningCallback = (result) => {
        this.setState({
            resultMeaning: result
        });
    }

    resultSentenceCallback = (result) => {
        this.setState({
            resultSentence: result
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Search resultMeaning={this.resultMeaningCallback} resultSentence={this.resultSentenceCallback} />
                <Result resultMeaning={this.state.resultMeaning} resultSentence={this.state.resultSentence}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 20,
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    }
});
