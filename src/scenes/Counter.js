/**
 * Created by steven on 10/14/16.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { connect } from 'tunk-react'
import {StyleSheet, DEBUG, scroll_throttle} from '../common/global';

@connect
class Btn extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btn} onPress={this.props.action}>
                <Text>{this.props.actionName}</Text>
            </TouchableOpacity>
        )
    }
}


@connect({
    count: 'counter.count'
},{
    incrementIfOdd:'counter.incrementIfOdd',
    incrementAsync:'counter.incrementAsync',
})
export default class Counter extends Component {

    componentWillMount(){
        //alert('componentWillMount');
    }

    increment_(){
        this.props.navigator.push({scene:'imagePicker'});
        this.dispatch('counter.increment');
    }

    decrement_(){
        this.props.navigator.push({scene:'lightBox'});
        this.dispatch('counter.decrement');
    }

    render() {

        const { count} = this.props;

        const { increment, incrementIfOdd, incrementAsync, decrement} = this;

        return (
            <ScrollView scrollEventThrottle={scroll_throttle}
                style={styles.body}>
                <Text>Clicked: {count}  times</Text>
                <Btn actionName='ncrement' action={::this.increment_}/>
                <Btn actionName='decrement' action={::this.decrement_}/>
                <Btn actionName='incrementIfOdd' action={incrementIfOdd}/>
                <Btn actionName='incrementAsync' action={incrementAsync}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        width:200,
        height:80,
        textAlign:'center',
        color: '#333333',
        padding:20,
        backgroundColor:'#ccc'
    },
    body:{
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor:'#fff',
        right: 0,
        top: 20,
    },
});

