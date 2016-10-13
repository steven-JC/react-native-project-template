
import ImagePicker_ from 'react-native-image-picker';
import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ImagePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source: '',
            uri:'',
            tips:'?'
        };
    }

    componentDidMount(){
        console.warn('componentDidMount ImagePicker!');
    }

    pickImage(){

        ImagePicker_.showImagePicker({
            title: '',
            customButtons: [
                //{name: 'fb', title: 'Choose Photo from Facebook'},
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }, (response) => {

            let tips = '',uri = '',source='';

            if (response.didCancel) {
                tips = 'User cancelled image picker';
            }
            else if (response.error) {
                tips = 'ImagePicker Error: ', response.error;
            }
            else if (response.customButton) {
                tips = 'User tapped custom button: ', response.customButton;
            }
            else {

                tips='OK!!!!!'

                if (Platform.OS === 'ios') {
                    uri = response.uri.replace('file://', '');
                } else {
                    uri = response.uri;
                }

                source = 'data:image/jpeg;base64,' + response.data;
            }



            this.setState({source, uri, tips});

        });
    }

    handlePressImage(e){
        this.pickImage();
    }

    render() {
        return (
            <TouchableOpacity {...this.props} onPress={this.handlePressImage.bind(this)}>
                {this.state.uri?<Image source={{uri:this.state.uri}} style={{width:this.props.width||200, height:this.props.height||200}} />:null}
            </TouchableOpacity>
        );
    }
}



























