import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/actions/counterActions';
import { RootState } from '../store/types';

const CounterScreen = () => {
    const count = useSelector((state:RootState) =>state.counter.count);
 const dispatch = useDispatch();
    return (
        <View>
          <Text style={{ fontSize: 24 }}>{count}</Text>
          <TouchableOpacity onPress={()=>dispatch(increment(5))}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>dispatch(decrement(5))}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Decrement</Text>
          </TouchableOpacity>
        </View>
     );
}

export default CounterScreen

const styles = StyleSheet.create({})