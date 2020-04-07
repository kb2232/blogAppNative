import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const IndexScreen = (props)=> {


  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={()=>props.navigation.navigate('ShowScreen')}>
          <Text>Show Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('CreateScreen')}>
          <Text>Create Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('EditScreen')}>
          <Text>Edit Screen</Text>
        </TouchableOpacity>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight:'100%',
    padding:10,
    flex:1
  }
});

export default IndexScreen;