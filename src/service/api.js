import {TextInput, View, StyleSheet} from "react-native";
import React, {Component} from 'react';

const searchApiPath = 'https://glosbe.com/gapi';

export default class ApiService {

    translate(phrase) {
        return fetch(searchApiPath + '/translate?from=eng&dest=th&format=json&phrase=' + phrase + '&pretty=true');
    }

    tm(phrase) {
        return fetch(searchApiPath + '/tm?from=eng&dest=th&format=json&phrase=' + phrase + '&page=1&pretty=true');
    }

}
