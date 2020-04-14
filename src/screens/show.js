import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { ContextStore } from '../context/Store';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = (props) => {
	const {data} = useContext(ContextStore);
	const post = data.find(blogpost => blogpost.id === props.navigation.getParam('id'));
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>{post.title} - {post.id}</Text>
			<Text style={styles.textStyle}>{post.content}</Text>
		</View>
	);
};
ShowScreen.navigationOptions = (props)=>{
  return{
		headerRight: <TouchableOpacity onPress={()=>
		props.navigation.navigate('EditScreen',{id:props.navigation.getParam('id')})}>
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  }
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		minHeight: '100%',
		padding: 10,
		flex: 1,
  },
  textStyle:{
    fontSize:30,
    marginVertical:10
  }
});

export default ShowScreen;
