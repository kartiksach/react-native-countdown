import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard.js';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
      //flex: 1,
      paddingTop: 20,
      backgroundColor: '#F3F3F3'
    },
  });

export class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                ...evt,
                timer: Date.now(),
                })),
            });
            }, 1000);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events});
    }

    // This function works fine with ES6 declaration but wont work with handleAddEvent() ..?
    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    render() {
        return [
            <FlatList 
                key='flatlist'
                style={styles.list}
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={item => item.id}
            />,
            <ActionButton
                key='action-button'
                onPress={this.handleAddEvent}
                buttonColor='rgba(231, 76, 60, 1)'
            />
        ];
    }
}