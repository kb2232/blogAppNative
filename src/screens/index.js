import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const IndexScreen = (props)=> {


  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title="Show Screen" onPress={()=>props.navigation.navigate('ShowScreen')} />
        <Button title="Create Screen" onPress={()=>props.navigation.navigate('CreateScreen')} />
        <Button title="Edit Screen" onPress={()=>props.navigation.navigate('EditScreen')} />
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
        <Text>BLOG</Text>
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