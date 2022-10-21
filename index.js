// /**
//  * @format
//  */
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/routes';
import setup, {storeObj} from './src/store/setup';
Navigation.events().registerAppLaunchedListener(() => {
  const store = setup();
  console.log('Store created', store.getState());
  registerScreens();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'AddToDo',
              passProps: {},
            },
          },
        ],
      },
    },
  });
});

// // Navigation.events().registerAppLaunchedListener(async () => {
// //   Navigation.setRoot({
// //     root: {
// //       bottomTabs: {
// //         children: [
// //           {
// //             stack: {
// //               children: [
// //                 {
// //                   component: {
// //                     name: 'App',

// //                     options: {
// //                       bottomTab: {
// //                         text: 'App',
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           },
// //           {
// //             stack: {
// //               children: [
// //                 {
// //                   component: {
// //                     name: 'ClassExample',
// //                     options: {
// //                       bottomTab: {
// //                         text: 'Class Example',
// //                       },
// //                     },
// //                   },
// //                 },
// //               ],
// //             },
// //           },
// //         ],
// //       },
// //     },
// //   });
// // });
