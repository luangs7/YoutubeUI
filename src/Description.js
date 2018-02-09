import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';

import styles from './styles/styles'
import VideoItem from './components/videoItem'
import NavItem from './components/navItem'
import data from './data'


export default class Description extends Component<{}> {

    render(){
        let video = this.props.video
        return(

            <View>
                <View>
                    <Image source={{uri:video.snippet.thumbnails.medium.url}} style={styles.thumbVideo}></Image>
                </View>
                <View>
                    <Text>
                        {video.description}
                    </Text>
                </View>
            </View>
        )
    }


}