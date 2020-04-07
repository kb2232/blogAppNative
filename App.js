import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

export default createAppContainer(navigator);