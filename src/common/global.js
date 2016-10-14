/**
 * Created by steven on 10/13/16.
 */
import {Platform, BackAndroid, ToastAndroid} from 'react-native';

export const scroll_throttle = 77;

export const DEBUG = true;

export const StyleSheet = DEBUG?require('react-native-debug-stylesheet'):require('react-native').StyleSheet;

export const backAndroidControl = () => {

    if(Platform.OS==='android') {
        var time = 0;
        BackAndroid.addEventListener('hardwareBackPress', () => {
            time++;
            if (time === 1) {
                ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
                setTimeout(()=> {
                    time = 0;
                }, 3000);
                return true;
            } else if (time === 2) {
                time = 0;
                return false;
            }


        });
    }

}

