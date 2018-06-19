/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import GoalList from './src/components/GoalList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
   userInput: '',
   goals: [],
   showModal: false,
   selected: {}
  };
  changeValue = e => {
    this.setState({userInput: e})
  };
  addGoal = () => {
    const goal = {value: this.state.userInput, key: `${Math.random()*(1000-1)+1}`};
    const goalMas = [...this.state.goals];
    goalMas.push(goal);
    this.setState({goals: goalMas, userInput: ''}); 
  };
  selectGoal = (key) => {
    const goal = this.state.goals.filter(item => item.key === key);
    this.setState({selected: {...goal[0]}, showModal: true});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={{marginTop: 50}}> Enter your goal :</Text>
       <TextInput 
        value={this.state.userInput}
        onChangeText={this.changeValue}
        style={styles.userInput}
        autoCorrect={false}
       />
       <Button 
       title='Add goal'
       onPress={this.addGoal}/>
       <GoalList 
        modal={this.state.showModal}
        selected={this.state.selected}
        goals={this.state.goals}
        selectGoal={this.selectGoal}
        closeModal={this.closeModal}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  userInput: {
    width: '80%',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
