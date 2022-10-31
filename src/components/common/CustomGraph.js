import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
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
  } = props;
  console.log(x_axis_label, 'x_axis_label....');
  return (
    <View>
      {type == 'line_chart' && (
        <View>
          <Text>Bezier Line Chart</Text>
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
            chartConfig={chartConfig}
            bezier={bezier}
            // chartConfig={{
            //   backgroundColor: '#e26a00',
            //   backgroundGradientFrom: '#fb8c00',
            //   backgroundGradientTo: '#ffa726',
            //   decimalPlaces: 2, // optional, defaults to 2dp
            //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            //   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            //   style: {
            //     borderRadius: 16,
            //   },
            //   propsForDots: {
            //     r: '6',
            //     strokeWidth: '2',
            //     stroke: '#ffa726',
            //   },
            // }}

            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default CustomGraph;
