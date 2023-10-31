import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from '../redux/CounterSlice';

const CounterScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  return (
    <View>
      <View style={{}}>
        <Text style={{color: 'black', marginBottom: 15}}>{count}</Text>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            backgroundColor: 'purple',
            marginBottom: 15,
          }}>
          <Text style={{color: 'wheat'}}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            backgroundColor: 'purple',
            marginBottom: 15,
          }}>
          <Text style={{color: 'wheat'}}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(reset())}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            backgroundColor: 'purple',
          }}>
          <Text style={{color: 'wheat'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
