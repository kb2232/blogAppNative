import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const CreateScreen = props => {


  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title="Home Screen" onPress={()=>props.navigation.navigate('Index')} />
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