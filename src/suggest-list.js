import {TextInput, View, StyleSheet, Text, ScrollView} from "react-native";
import React, {Component} from 'react';


let _this;
export default class SuggestList extends Component {

    constructor(props) {
        super(props);

        _this = this;
    }

    select(word) {
        this.props.selectedWord(word);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.props.suggestList ? this.props.suggestList.map(function (item, i) {
                        return (
                            <View style={styles.row} key={'row_' + i}>
                                <Text key={'value_' + i} onPress={() => _this.select(item)}>{item}</Text>
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
        flex: 0.85,
        backgroundColor: '#ffffff'
    },
    row: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        textAlign: 'left',
        borderColor: 'gray',
        borderTopWidth: 0.3,
    }
});