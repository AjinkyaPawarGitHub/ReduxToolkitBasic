

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import {store} from './src/redux/store'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CounterScreen from './src/modules/counter/screens/CounterScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {


  return (
    <Provider store={store}>
    <View style={{flex:1 ,justifyContent: 'center' , alignItems:'center' , backgroundColor:'white'}}>
      <CounterScreen/>
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
});

export default App;
