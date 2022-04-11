/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors, parameters } from './src/global/styles';
import SignInScreens from './src/screens/authScreens/SignInScreens';
import SignInWelcomeScreens from './src/screens/authScreens/SignInWelcomeScreens';
import RootNavigator from './src/navigation/RootNavigators';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.statusbar}
      />
      {/* <SignInScreens/> */}
      {/* <SignInWelcomeScreens/> */}
      <RootNavigator/>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
