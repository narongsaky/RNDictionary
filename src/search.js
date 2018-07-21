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

    search(text) {
        this.setState({text});
        if (text) {

            const word = text.toLowerCase();

            this.apiService.getSuggestWord(word).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson) {
                        const result = responseJson.map(item => item.word);
                        this.props.resultSuggest(result);
                    }
                });

        } else {
            this.props.resultSuggest(null);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textSearch}
                    onChangeText={(text) => this.search(text)}
                    value={this.state.text}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
    },
    textSearch: {
        // borderColor: 'gray',
        // borderWidth: 0,
        flex: 1,
        alignItems: 'flex-start',
        margin: 15,
        marginTop: 35,
        backgroundColor: '#ffffff',
        height: 40,
        fontSize: 15
    }
});