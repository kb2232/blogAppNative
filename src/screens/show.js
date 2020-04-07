import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView,Button } from 'react-native';

const ShowScreen = props => {


  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title="Home Screen" onPress={()=>props.navigation.navigate('Index')} />
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
        <Text>SHOW</Text>
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

export default ShowScreen;