import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={[home_styles.header]}>Welcome to Design Patterns App!!!</Text>
        <Text>The main purpose of this app is to teach you how to use design patterns in programming.
          Another purpose is to guide you on when and where a design pattern should be used.</Text>
      </View>
    );
  }
}

const MainNavigator = TabNavigator({
    Home: {screen: Home}
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const home_styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  }
})


