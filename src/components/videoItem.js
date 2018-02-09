import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

import styles from '../styles/styles'
import Description from "../Description";
import {
    StackNavigator,
} from 'react-navigation'

export default class VideoItem extends Component<{}> {

    constructor(props) {
        super(props)
    }


    render() {
        let video = this.props.video
        const descp = video.snippet.channelTitle + " · " + kFormatter(video.statistics.viewCount) + " views"
        return (

            <TouchableWithoutFeedback>
                <View style={styles.videoItem}>
                    <Image source={{uri: video.snippet.thumbnails.medium.url}} style={styles.thumbVideo}></Image>

                    <View style={styles.bottomVideoItem}>
                        <Image source={{uri: "https://via.placeholder.com/150x150"}} style={styles.roundImage}></Image>
                        <View style={styles.videoDetails}>
                            <Text numberOfLines={2}
                                  style={{fontSize: 16, color: '#3c3c3c'}}>{video.snippet.title}</Text>
                            <Text style={{fontSize: 13, color: '#b2b2b2'}}>{descp}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )

    }

}


function kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}