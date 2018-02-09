import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'
export default class navItem extends Component<{}> {

    render() {
        return(
            <View>
                <TouchableOpacity style={styles.tabOption} onPress={() => {Actions.view2()}}>
                    <Text style={styles.tabTitle}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}