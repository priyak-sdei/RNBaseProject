import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
//import * as AppActions from '../../actions';
import addTodoReducer from '../../actions/todo';
export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'jgj',
    };
  }
  addTodo = () => {
    addTodoReducer({name: this.state.name});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Add Todo </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            value={this.state.name}
            onChangeText={text => {
              this.setState({name: text});
            }}
            placeholder={'Write a todo'}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.addTodo()}>
          <Text style={styles.btntitle}>Add todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
