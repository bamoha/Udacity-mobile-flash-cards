import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import ListOfDeckPage from '../pages/ListOfDeckPage';
import AddDeckPage from '../pages/AddDeckPage';

const BottomTab = createBottomTabNavigator();
const Home = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={Home}>
      <BottomTab.Screen
        name="Decks"
        component={ListOfDeckPage}
        options={{
          title: 'Deck List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="new-deck"
        component={AddDeckPage}
        options={{
          title: 'Add Deck',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes.name : Home;

  switch (routeName) {
    case 'Decks':
      return 'Decks View';
    case 'new-deck':
      return 'Add New Deck';
    case 'deck-details':
      return 'Deck Details';
  }
}
