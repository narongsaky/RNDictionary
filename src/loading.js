import {TextInput, View, StyleSheet, Text, ScrollView, ActivityIndicator} from "react-native";
import React, {Component} from 'react';

export default class Loading extends Component {


    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="#B4B4B4"/>
                <Text style={styles.title}>Develop by narongsak.yoo@gmail.com</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    }
});