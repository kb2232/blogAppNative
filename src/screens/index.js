import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { ContextStore } from '../context/Store';

const IndexScreen = (props)=> {
  const {data, deletePost} = useContext(ContextStore);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click the plus sign to create a post</Text>
      <ScrollView style={styles.container}>
				<FlatList
					data={data}
					keyExtractor={el => el.id}
					renderItem={({ item }) => {
						return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('ShowScreen',{id:item.id})}>
              <View style={styles.row}>
                <View>
                  <Text style={styles.textStyle}>{item.title}- {item.id}</Text>
                </View>
                <TouchableOpacity onPress={()=>deletePost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            )
					}}
				/>
			</ScrollView>
    </View>
  );
};

IndexScreen.navigationOptions = (props)=>{
  return{
    headerRight: <TouchableOpacity onPress={()=>props.navigation.navigate('CreateScreen')}>
      <Feather name="plus" size={30} />
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
  text:{
    fontSize:20,
    marginVertical:10,
  },
  textStyle:{
    fontSize:20,
    marginVertical:10,
    flex:1
  },
  row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:'black',
    marginBottom:5,
    padding:5
  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen;