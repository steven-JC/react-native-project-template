/**
 * Created by steven on 10/14/16.
 */

import React, { Component } from 'react';
import {Navigator, View, Text} from 'react-native';

export default class Navigator_ extends Component{

    renderScene(route, navigator) {
        if(route.scene){
            const scenes = this.props.scenes;
            if(!scenes[route.scene]){
                console.error('unknown scene:'+route.scene);
                return;
            }

            const Component = scenes[route.scene].scene;
            const onForward = scenes[route.scene].onForward;
            const onBack = scenes[route.scene].onBack;


            return (<Component
                onForward={()=>{onForward(route, navigator)}}
                onBack={()=>{onBack(route, navigator)}}
                navigator={navigator}
                route={route} {...route.passProps} />);
        }else {
            const Component = route.component;
            return (<Component
                navigator={navigator}
                route={route} {...route.passProps} />);
        }
    }

    configureScene(route, routeStack){
        if(route.scene){
            const configure = this.props.scenes[route.scene].configure;
            return configure && Navigator.SceneConfigs[configure] ? Navigator.SceneConfigs[configure]: Navigator.SceneConfigs.PushFromRight;
        }else return Navigator.SceneConfigs.PushFromRight;
    }

    render() {

        const NavBar = this.props.NavBar;

        const props = {
            style:{flex:1, top:0, bottom:0, right:0, left:0},
            renderScene:this.renderScene.bind(this),
            configureScene:this.configureScene.bind(this),
            initialRoute:{
                scene: 'index',
            }
        };

        NavBar && (props.navigationBar = (<NavBar/>));

        return (<Navigator {...props} />);
    }
}




