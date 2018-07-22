import {TextInput, View, StyleSheet} from "react-native";
import React, {Component} from 'react';

const searchApiPath = 'https://glosbe.com/gapi';
import wordsDictionary from '../../words_dictionary.json';

export default class ApiService {

    translate(phrase) {
        return fetch(searchApiPath + '/translate?from=eng&dest=th&format=json&phrase=' + phrase + '&pretty=true');
    }

    tm(phrase) {
        return fetch(searchApiPath + '/tm?from=eng&dest=th&format=json&phrase=' + phrase + '&page=1&pretty=true');
    }

    getSuggestWord(word) {
        return wordsDictionary.filter(item => item.indexOf(word) > -1).slice(0, 250);
    }

}
