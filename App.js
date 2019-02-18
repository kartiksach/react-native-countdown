import React from 'react';
import { EventList } from './components/EventList.js';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <EventList />
      </View>
    );
  }
}


