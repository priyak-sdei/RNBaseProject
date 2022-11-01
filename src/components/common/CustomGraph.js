import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const CustomGraph = props => {
  let {
    type = 'line_chart',
    x_axis_label = [],
    datasets = {},
    yAxisLabel = '',
    yAxisSuffix = '',
    height = 100,
    width = 200,
    bezier = true,
    style = {},
    custom_chartConfig = {},
  } = props;
  console.log(x_axis_label, 'x_axis_label....');
  return (
    <View>
      {type == 'line_chart' && (
        <View>
          <LineChart
            data={{
              labels: x_axis_label,
              datasets: datasets,
            }}
            width={width} // from react-native
            height={height}
            yAxisLabel={yAxisLabel}
            yAxisSuffix={yAxisSuffix}
            yAxisInterval={1} // optional, defaults to 1
            bezier={bezier}
            chartConfig={custom_chartConfig}
            style={style}
          />
        </View>
      )}
      {type == 'stack' && (
        <View>
          <StackedBarChart
            data={datasets}
            width={width} // from react-native
            height={height}
            yAxisLabel={'Rp'}
            chartConfig={custom_chartConfig}
            style={style}
          />
        </View>
      )}
    </View>
  );
};

export default CustomGraph;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});
