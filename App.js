import React from 'react';
import { EventList } from './components/EventList.js';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventForm from './components/EventForm.js';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
]);

const rootStack =  createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: {
      title: 'Your Events',
    }
  },
  form: {
    screen: EventForm,
    navigationOptions: {
      title: 'Add event'
    }
  }
});

const App = createAppContainer(rootStack);

export default App;



