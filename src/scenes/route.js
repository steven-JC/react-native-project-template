/**
 * Created by steven on 10/14/16.
 */
export default {
    index:{
        scene:require('./Counter').default,
        onForward:(route, navigator) => {
            navigator.push({
                scene: 'lightBox',
            });
        },
        onBack:(route, navigator) => {
            if (navigator.getCurrentRoutes().length) {
                navigator.pop();
            }
        },
        configure:'HorizontalSwipeJump',
    },
    imagePicker:{
        scene:require('./ImagePicker').default,
        onForward:(route, navigator) => {
            navigator.push({
                scene: 'counter',
            });
        },
        onBack:(route, navigator) => {
            if (navigator.getCurrentRoutes().length) {
                navigator.pop();
            }
        },
        configure:'HorizontalSwipeJump',
    },
    counter:{
        scene:require('./Counter').default,
        onForward:(route, navigator) => {
            navigator.push({
                scene: 'imagePicker',
            });
        },
        onBack:(route, navigator) => {
            if (navigator.getCurrentRoutes().length) {
                navigator.pop();
            }
        },
        configure:'HorizontalSwipeJump',
    },
    lightBox:{
        scene:require('./LightBox').default,
        onForward:(route, navigator) => {
            navigator.push({
                scene: 'counter',
            });
        },
        onBack:(route, navigator) => {
            if (navigator.getCurrentRoutes().length) {
                navigator.pop();
            }
        },
        configure:'HorizontalSwipeJump',
    },
}

