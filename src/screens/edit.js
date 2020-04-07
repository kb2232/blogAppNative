import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const EditScreen = ()=> {


  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Index')}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
        <Text>EDIT</Text>
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

export default EditScreen;