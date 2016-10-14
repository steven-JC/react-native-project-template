/**
 * Created by steven on 10/13/16.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';

import ImagePicker_ from '../common/ImagePicker';

import {StyleSheet, DEBUG, scroll_throttle} from '../common/global';

const ConsolePanel = require('react-native-console-panel').displayIgnoreDevVariable();
let {width,height} =  Dimensions.get('window');


export default class ImagePicker extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <View style={[styles.body, {top:20}]}>

                <ScrollView
                    scrollEventThrottle={scroll_throttle}
                    style={styles.body}>
                    <View>
                        <Text>
                            ---Image Picker---
                        </Text>
                    </View>

                    <ImagePicker_ style={styles.picker} />

                    <View>
                        <Text style={styles.instructions}>
                            ------
                        </Text>
                    </View>
                </ScrollView>
                {DEBUG?<View style={{position: 'absolute', bottom:0, left:0, height:140}}>{ConsolePanel}</View>:null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor:'#fff',
        right: 0,
        top: 0,
    },

    picker: {
        width:200,
        height:200,
        margin:20,
        backgroundColor: '#ccc',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

