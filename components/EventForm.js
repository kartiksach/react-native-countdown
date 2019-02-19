import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableHighlight
} from 'react-native';

class EventForm extends Component {
    handlePress() {
        
    }

    render() {
        return(
            <View>
                <TouchableHighlight
                    onPress={this.handlePress}
                >
                    <Text>
                        Take me to next Page
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;