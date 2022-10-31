import {Navigation} from 'react-native-navigation';
import Login from '../containers/login';
import {AddToDo, ShowToDo} from '../containers/todo';
import Graph from '../containers/graph';
export const registerScreens = () => {
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('AddToDo', () => AddToDo);
  Navigation.registerComponent('ShowToDo', () => ShowToDo);
  Navigation.registerComponent('Graph', () => Graph);
};
