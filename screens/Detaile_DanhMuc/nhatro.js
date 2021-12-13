import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
    const pressHandle = ()=>{
        navigation.goBack();
    }

    return (
        <View >
        <Text>Page of Nhà Trọ nè</Text>
        <Button title='back to home screen' onPress={pressHandle}/>
        <StatusBar style="auto"  />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
