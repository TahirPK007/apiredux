import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Data from './components/Data';

const App = () => {
  return (
    <Provider store={store}>
      <Data />
    </Provider>
  );
};

export default App;
