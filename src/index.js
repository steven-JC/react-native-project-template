/**
 * Created by steven on 10/13/16.
 */
import React, { Component } from 'react';
import {AppRegistry, Platform, BackAndroid, ToastAndroid} from 'react-native';
import Orientation from 'react-native-orientation';

import tunk from "tunk";
import actionMiddleware from "tunk-action-middleware";

import {backAndroidControl} from './common/global.js';

import './modules/main.js';
import Navigator from './common/Navigator';

import scenes from './scenes/route';
import NavBar from './components/NavBar';

tunk.addMiddleware([actionMiddleware]);

export default class App extends Component {

    componentWillMount(){
        if(Platform.OS == 'ios')
            Orientation.lockToLandscape();
    }

    componentDidMount(){
        backAndroidControl();
    }

    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress', () => {});
    }

    render() {
        return (<Navigator scenes={scenes} NavBar={NavBar} />);
    }
}



AppRegistry.registerComponent('v35', () => App);