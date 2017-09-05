import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

class Header extends React.Component {
  render() {
    return (
      <Text style={[styles.header]}>{this.props.children}</Text>
    );
  }
}

class RegularText extends React.Component {
  render() {
    return (
      <Text style={styles.regular_text}>{this.props.children}</Text>
    )
  }
}

class SmallText extends React.Component {
  render() {
    return (
      <Text style={styles.small_text}>{this.props.children}</Text>
    )
  }
}

class SmallIcon extends React.Component {
  render() {
    return (
      <FontAwesome name={this.props.type} size={32} style={{marginRight: 10}} color="green" />
    )
  }
}

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header>Welcome to Design Patterns App!!!</Header>
        <RegularText>
          <SmallIcon type="book" />
          The main purpose of this app is to teach you how to use design patterns in programming.
          Another purpose is to guide you on when and where a design pattern should be used.
        </RegularText>

        <RegularText>The best way to start is by knowing the different types of design patterns.</RegularText>

        <SmallText>Click on Button to view types of Design Patterns</SmallText>
        <Button
          onPress={() => this.props.navigation.navigate('Type')}
          title="Go to types of design patterns"
        />
      </ScrollView>
    );
  }
}

class Type extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Types of Design Patterns',
  };
  render() {
    return (
      <ScrollView style={styles.container} >
        <Text>Types of Design Patterns</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  regular_text: {
    marginTop: 20,
    fontSize: 18,
  },
  small_text: {
    marginTop: 20,
    fontSize: 12,
  },
  container: {
    marginTop: 30
  }
})

const MainNavigator = TabNavigator({
    Home: {screen: Home},
    Type: {screen: Type},
}, {
  tabBarPosition: 'bottom',
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}


