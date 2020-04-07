import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const EditScreen = props => {


  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title="Home Screen" onPress={()=>props.navigation.navigate('Index')} />
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