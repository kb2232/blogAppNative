import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BlogStoreProvider } from './src/context/Store'

import Index from './src/screens/index';
import ShowScreen from './src/screens/show';
import CreateScreen from './src/screens/create';
import EditScreen from './src/screens/edit';


const navigator = createStackNavigator(
  {
    Index,
    ShowScreen,
    CreateScreen,
    EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog Post'
    }
  }
);

const App =  createAppContainer(navigator);

export default ()=>{
  return(
    <BlogStoreProvider>
      <App />
    </BlogStoreProvider>
  )
};