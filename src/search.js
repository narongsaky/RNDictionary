import {TextInput, View, StyleSheet, Button} from "react-native";
import React, {Component} from 'react';

import ApiService from "./service/api"

export default class Search extends Component {

    apiService = new ApiService();

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    search(phrase) {
        if (phrase) {
            this.apiService.translate(phrase.toLowerCase()).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.result === "ok") {
                        const result = responseJson.tuc.map(item => {
                            return (item.phrase !== undefined && item.phrase.text !== undefined) ? item.phrase.text : '';
                        }).filter(item => item !== '');
                        this.props.resultMeaning(result);
                    }
                });

            this.apiService.tm(phrase.toLowerCase()).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.result === "ok") {
                        const result = responseJson.examples;
                        this.props.resultSentence(result);
                    }
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textSearch}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    onEndEditing={() => this.search(this.state.text)}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    textSearch: {
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        alignItems: 'flex-start',
        margin: 5,
        backgroundColor: '#ffffff',
        height: 40
    }
});