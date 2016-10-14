/**
 * Created by steven on 10/13/16.
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import tunk from "tunk";
import actionMiddleware from "tunk-action-middleware";

import './modules/main.js';
import Navigator from './common/Navigator';

import scenes from './scenes/route';
import NavBar from './components/NavBar';

tunk.addMiddleware([actionMiddleware]);

export default class App extends Component {
    render() {
        return (<Navigator scenes={scenes} NavBar={NavBar} />);
    }
}

AppRegistry.registerComponent('v35', () => App);