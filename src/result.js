import {TextInput, View, StyleSheet, Text, ScrollView, ActivityIndicator} from "react-native";
import React, {Component} from 'react';
import ApiService from "./service/api"
import Loading from "./loading";

export default class Result extends Component {

    apiService = new ApiService();

    constructor(props) {
        super(props);

        this.state = {
            meaning: null,
            sentence: null,
            isLoading: true,
            isError: true,
            errorMsg: ''
        }

    }


    componentDidMount() {


        const word = this.props.word;
        this.apiService.translate(word).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.result === "ok") {
                    const result = responseJson.tuc.map(item => {
                        return (item.phrase !== undefined && item.phrase.text !== undefined) ? item.phrase.text : '';
                    }).filter(item => item !== '');
                    this.setState(
                        {
                            meaning: result,
                            isLoading: false
                        }
                    );
                } else {
                    this.setState(
                        {
                            isLoading: false,
                            isError: true,
                            errorMsg: responseJson.message
                        }
                    );
                }
            });

        this.apiService.tm(word).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.result === "ok") {
                    const result = responseJson.examples;
                    this.setState(
                        {
                            sentence: result,
                            isLoading: false
                        }
                    );
                } else {
                    this.setState(
                        {
                            isLoading: false,
                            isError: true,
                            errorMsg: responseJson.message
                        }
                    );
                }
            });
    }


    render() {
        return (
            <ScrollView>

                { this.state.isLoading ? <View style={styles.container}><Loading/></View> : null}

                { !this.state.isLoading && this.state.isError ?
                    <View style={styles.container}><Text
                        style={{textAlign: 'center'}}>{this.state.errorMsg}</Text></View> : null}

                { !this.state.isLoading && !this.state.isError ? (
                    <View style={styles.container}>
                        <Text style={styles.title}>Meaning</Text>
                        <Text style={styles.content}>
                            {this.state.meaning ? this.state.meaning.map(function (item, i) {
                                return i !== 0 ? " , " + item : item;
                            }) : null}
                        </Text>
                        <Text style={styles.title}>Sentence</Text>
                        {this.state.sentence ? this.state.sentence.map(function (item, i) {
                            return (
                                <View style={styles.contentSentence} key={'sentence_' + i}>
                                    <Text key={'first_' + i}>{item.first}</Text>
                                    <Text key={'second_' + i}>{item.second}</Text>
                                </View>
                            )
                        }) : null}
                    </View>
                ) : null}


            </ScrollView>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 0.85,
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'

        // marginBottom: 10
    },
    content: {
        padding: 20,
        textAlign: 'left'
    },
    contentSentence: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        textAlign: 'left'
    }
});