import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import Add from './Add';
import { StackFollow } from './StackFollow';
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator({

  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: StackFollow,
  },
  Profile: {
    screen: Profile,
  },
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'gray',
    },
  },
});

export { RutasAutenticadas };
