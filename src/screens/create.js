import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const CreateScreen = ()=> {


  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Index')}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
        <Text>CREATE</Text>
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

export default CreateScreen;