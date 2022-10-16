/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {AppRegistry} from 'react-native';
import App from './App';
import ClassExample from './ClassExample';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => ClassExample);
Navigation.registerComponent('ClassExample', () => ClassExample);
Navigation.registerComponent('App', () => App);
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'ClassExample',
//             },
//           },
//         ],
//       },
//     },
//   });
// });

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'App',
                    options: {
                      bottomTab: {
                        text: 'App',
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'ClassExample',
                    options: {
                      bottomTab: {
                        text: 'Class Example',
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
