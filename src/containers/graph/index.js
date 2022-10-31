import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CustomGraph from '../../components/common/CustomGraph';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x_axis_label: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{data: [20, 5, 10, 14, 60]}, {data: [1, 25, 40, 7, 30]}],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Example of Chart Components </Text>
        <CustomGraph
          x_axis_label={this.state.x_axis_label}
          datasets={this.state.datasets}
          height={300}
          width={Dimensions.get('window').width - 20}
          yAxisLabel="$"
          yAxisSuffix="k"
          bezier={true}
          type="line_chart"></CustomGraph>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});
