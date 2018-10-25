import { createBottomTabNavigator } from 'react-navigation';
import Add from './Add';
import Follow from './Follow';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';

const RutasAutenticadas = createBottomTabNavigator({

  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },
},
{
  tabBarPosition: 'bottom',
});

export { RutasAutenticadas };
