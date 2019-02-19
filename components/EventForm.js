import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableHighlight,
    StyleSheet,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },

    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,
    },

    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    btnText: {
        color: '#fff',
        fontSize: 18
    }
});



class EventForm extends Component {
    state = {
        title: '',
        date: ''
    }

    handlePress = () => {
        this.props.navigation.navigate('list');
    }

    handleChangeTitle = (value) => {
        this.setState({
            title: value,
        })
    }

    render() {
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffe6e6'
                }}
            >
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.text}
                        placeholder='Enter Event title'
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handlePress}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>
                        Add Event
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;