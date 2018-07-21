import {TextInput, View, StyleSheet, Text, ScrollView} from "react-native";
import React, {Component} from 'react';


export default class Result extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Meaning</Text>
                    <Text style={styles.content}>
                        {this.props.resultMeaning ? this.props.resultMeaning.map(function (item, i) {
                            return i !== 0 ? " , " + item : item;
                        }) : null}
                    </Text>
                    <Text style={styles.title}>Sentence</Text>


                    {this.props.resultSentence ? this.props.resultSentence.map(function (item, i) {
                        return (
                            <View style={styles.contentSentence} key={'sentence_' + i}>
                                <Text key={'first_' + i}>{item.first}</Text>
                                <Text key={'second_' + i}>{item.second}</Text>
                            </View>
                        )
                    }) : null}
                </View>
            </ScrollView>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 0.9,
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