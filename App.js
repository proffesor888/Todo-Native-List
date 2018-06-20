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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addGoal, removeGoal} from './src/actions';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class App extends Component<Props> {
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
    this.setState({userInput: ''});
    this.props.addGoal(goal);
    //const goalMas = [...this.state.goals];
    //goalMas.push(goal); 
  };
  selectGoal = (key) => {
    const goal = this.props.goals.filter(item => item.key === key);
    this.setState({selected: {...goal[0]}, showModal: true});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }
  removeGoal = (key) => {
    this.props.removeGoal(key);
    this.setState({showModal: false});
  }
  render() {
    console.log(this.props.goals)
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
        goals={this.props.goals}
        selectGoal={this.selectGoal}
        closeModal={this.closeModal}
        removeGoal={this.removeGoal}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals.data
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addGoal,
    removeGoal
  }, dispatch);
};

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
