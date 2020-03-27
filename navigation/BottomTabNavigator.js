import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import * as Icon from '../components/Icon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

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
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Icon.Home focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <Icon.Search focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="Coming soon"
        component={SearchScreen}
        options={{
          title: 'Coming soon',
          tabBarIcon: ({ focused }) => <Icon.CommingSoon focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={SearchScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ focused }) => <Icon.Downloads focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={SearchScreen}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <Icon.More focused={focused} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
