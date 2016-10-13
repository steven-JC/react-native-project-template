/**
 * Created by steven on 10/13/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import ImagePicker from './utils/ImagePicker';
import global from './utils/global';
const ConsolePanel = require('react-native-console-panel').displayIgnoreDevVariable();
const StyleSheet = global.debug?require('react-native-debug-stylesheet'):require('react-native').StyleSheet;

let {width,height} =  Dimensions.get('window');

export default class v35 extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <View style={[styles.body, {top:20}]}>
                <ScrollView
                    scrollEventThrottle={global.scroll_throttle}
                    style={styles.body}>
                    <View>
                        <Text>
                            ---Image Picker---
                        </Text>
                    </View>

                    <ImagePicker style={styles.picker} />

                    <View>
                        <Text style={styles.instructions}>
                            ------
                        </Text>
                    </View>
                </ScrollView>
                {global.debug?<View style={{position: 'absolute', bottom:0, left:0, height:140}}>{ConsolePanel}</View>:null}
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

var prom =function(){return new Promise(function(resolve){
    setTimeout(()=>{
        resolve('resolve');
    },1000);
})};

function connect(target){
    console.warn(target.name);
    if(target.name){
        var a = new target();

        ((async function(){
            return await a.alert();
        })()).then(function(r){
            console.log(r)
        });
    }
}



@connect
class AAAA{
    @connect
    async alert(){
        return await new Promise(function(resolve){
            setTimeout(()=>{
                resolve('async');
            },1000);
        });
    }
}

















AppRegistry.registerComponent('v35', () => v35);