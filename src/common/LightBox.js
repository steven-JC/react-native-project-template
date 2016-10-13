/**
 * Created by steven on 10/13/16.
 */
var Lightbox = require('react-native-lightbox');

var LightboxView = React.createClass({
    render: function() {
        return (
            <Lightbox navigator={this.props.navigator}>
                <Image
                    style={{ height: 300 }}
                    source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
                    />
            </Lightbox>
        );
    },
});