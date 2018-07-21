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
import SuggestList from "./src/suggest-list";
import DevelopBy from "./src/develop-by";

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
            suggestList: null,
            word: null,
            isOpenResult: false
        };
    }


    selectedWordCallback = (word) => {
        this.setState({
            word: word,
            isOpenResult: true
        });
    };

    resultSuggestCallback = (result) => {
        this.setState({
            suggestList: result,
            isOpenResult: false
        });
    };

    render() {
        return (
            <View style={styles.container}>

                <Search resultSuggest={this.resultSuggestCallback}/>

                {!this.state.isOpenResult && this.state.suggestList ? <SuggestList selectedWord={this.selectedWordCallback}
                                                         suggestList={this.state.suggestList}/> : null }

                {this.state.isOpenResult ? <Result word={this.state.word}/> : null }

                {!this.state.suggestList ? <DevelopBy/> : null }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    }
});
