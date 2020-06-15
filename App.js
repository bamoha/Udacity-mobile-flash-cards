import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { Platform, StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import BottomTabNavigator from './navigation/NavigationBar';
import ScoreViewScreen from "./pages/ViewDeckScorePage";
import { setLocalNotification } from "./constants/utils";
import ViewDeckPage from './pages/ViewDeckPage';
import AddQuestionPage from './pages/AddQuestionPage';
import QuizPage from './pages/QuizPage';

const Stack = createStackNavigator();

class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Decks" component={BottomTabNavigator} />
            <Stack.Screen options={{ headerTitle: 'Deck Details' }} name="deck-details" component={ViewDeckPage} />
            <Stack.Screen options={{ headerTitle: 'Add Card' }} name="add-card" component={AddQuestionPage} />
            <Stack.Screen options={{ headerTitle: 'Quiz View' }} name="add-quiz" component={QuizPage} />
            <Stack.Screen options={({ navigation, route }) => ({
              headerTitle: 'Quiz Score',
              headerLeft: () => (
                <TouchableOpacity style={{ padding: 10 }} onPress={() => { navigation.navigate("Decks") }}>
                  <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
              )
            })}
              name="view-score"
              component={ScoreViewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;