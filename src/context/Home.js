/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import styles from '../styles/styles'
import VideoItem from '../components/videoItem'
import NavItem from '../components/navItem'
import data from '../data'
import { Actions } from 'react-native-router-flux';



export default class Home extends Component<{}> {



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
            <Image source={require('../image/logo.png')} style={styles.logo} />
        </View>
          <View style={styles.body}>

                <FlatList
                    data={data.items}
                    renderItem={(video) => <VideoItem video={video.item}/>}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={{height:1, backgroundColor:'#e5e5e5'}}/>}

                />


          </View>
          <View style={styles.tabBar}>
              <NavItem title={"Home"}/>
              <NavItem title={"Trending"}/>
              <NavItem title={"Subscription"}/>
              <NavItem title={"Library"}/>
          </View>
      </View>
    );
  }
}

