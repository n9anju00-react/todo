import React,{useState,useLayoutEffect,useEffect} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';


export default function DetailsScreen({route,navigation}) {
  const [todo, setTodo] =  useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0'
      },
      headerRight: () => (
        <AntDesign 
          style={styles.navButton} 
          name="save" 
          size={24} 
          color="black"
          onPress={() => navigation.navigate('Home',{todo: todo})} />
      ),
    })
  }),[todo];

  // useEffect(() => {
  //   if (route.params?.todo) {
  //     const newTodos = [...todos,route.params?.todo];
  //     setTodos(newTodos);
  //   }
  // }, [route.params?.todo])

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.newTask} 
        onChangeText={text => setTodo(text)}
        value={todo} 
        placeholder="Add new task" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  navButton: {
    marginRight: 5,
    fontSize: 24,
    padding: 4,
  },
  newTask: {
    width: '100%',
    margin: 20,
    fontSize: 18,
  }
});