import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Network extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDataFromServer = () => {
    try {
      fetch('https://reactnative.dev/movies.json')
        .then(response => console.log(response.json()))
        .then(json => {
          console.log(json);
        });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Network </Text>
        <Button
          onPress={() => this.getDataFromServer()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default Network;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
