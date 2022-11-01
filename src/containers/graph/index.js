import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import CustomGraph from '../../components/common/CustomGraph';
const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}> Example of Chart Components </Text>
          <View>
            <Text style={styles.title}> Line Chart Example</Text>
            <Text>
              A line chart is a type of chart used to show information that
              changes over time. Line charts are created by plotting a series of
              several points and connecting them with a straight line. Line
              charts are used to track changes over short and long periods
            </Text>
            <CustomGraph
              x_axis_label={this.state.x_axis_label}
              datasets={this.state.datasets}
              height={300}
              width={Dimensions.get('window').width - 20}
              yAxisLabel="$"
              yAxisSuffix="k"
              bezier={false}
              style={{
                marginVertical: 8,
                borderRadius: 5,
              }}
              type="line_chart"
              custom_chartConfig={chartConfig}></CustomGraph>
          </View>

          <View>
            <Text style={styles.title}>Stacked Bar chart Example</Text>
            <Text>
              A stacked chart is a form of bar chart that shows the composition
              and comparison of a few variables, either relative or absolute,
              over time
            </Text>
            <CustomGraph
              width={Dimensions.get('window').width - 20}
              style={{
                marginVertical: 8,
                borderRadius: 5,
              }}
              type="stack"
              x_axis_label={this.state.x_axis_label}
              datasets={{
                labels: ['Test1', 'Test2'],
                legend: ['Pain', 'Mood', 'Weight'],
                data: [
                  [60, 60, 60],
                  [30, 30, 60],
                ],
                barColors: ['#e26a00', '#fb8c00', '#a4b0be'],
              }}
              height={300}
              yAxisLabel="$"
              yAxisSuffix="k"
              bezier={false}
              withHorizontalLines={false}
              custom_chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp

                color: (opacity = 1) => `white`,
                labelColor: (opacity = 1) => `white`,
                style: {
                  borderRadius: 16,
                },
              }}></CustomGraph>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});
