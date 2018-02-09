import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                paddingTop: 18,
            }
        }),
            flex: 1,
            backgroundColor: 'white'
    },

    navBar: {
        ...Platform.select({
            android:{
                elevation: 3,
            },

            ios:{
                borderColor: '#ddd',
                borderBottomWidth: 1
            }
        }),
        height:55,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal:15
    },

    logo:{
        ...Platform.select({
            ios: {
                width: 85,
                height:15
            },
            android: {
                width: 98,
                height:22
            }
    }),

    },

    body:{
        flex: 1,
        backgroundColor: '#F5FCFF'
    },

    tabBar: {
        ...Platform.select({
            android:{
                elevation: 3,
            },

            ios:{
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
            }
        }),
        backgroundColor: 'white',
        height:60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabOption:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c3c',
        paddingTop: 4
    },

    videoItem: {
        padding: 15,
        elevation: 3
    },
    thumbVideo: {
        height: 200,
    },

    bottomVideoItem: {
        flexDirection: 'row',
        paddingTop: 15
    },

    roundImage:{
        ...Platform.select({
            android: {
                width: 50,
                height: 50,
                borderRadius: 25
            },

            ios:{
                width: 50,
                height: 50,
                borderRadius: 25
            }
        })
    },

    videoDetails:{
        paddingHorizontal: 15,
        flex:1
    }

});

export default styles

