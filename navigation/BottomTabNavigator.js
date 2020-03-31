import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import MoreScreen from '../screens/MoreScreen';
import * as Icon from '../components/Icon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      headerMode={'none'}
      mode={'modal'}
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SearchStack(props) {
  return (
    <Stack.Navigator
      headerMode={'none'}
      mode={'modal'}
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator(props) {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: '#696969',
      style: {
        backgroundColor: '#121212',
        borderColor: 'red',
        borderTopWidth: 0,
      },
      labelStyle: {
        fontSize: 9,
      },
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Icon.Home focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <Icon.Search focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={ComingSoonScreen}
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ focused }) => <Icon.CommingSoon focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={DownloadsScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ focused }) => <Icon.Downloads focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <Icon.More focused={focused} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
