import {TextInput, View, StyleSheet, Text, ScrollView} from "react-native";
import React, {Component} from 'react';
import ApiService from "./service/api"

export default class DevelopBy extends Component {


    constructor(props) {
        super(props);


    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Develop by narongsak.yoo@gmail.com</Text>
                </View>
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
        textAlign: 'center',
        marginTop: 50
    }
});