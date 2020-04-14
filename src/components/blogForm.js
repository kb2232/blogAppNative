import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

const BlogPostForm = props => {
  const [title, setTitle] = useState(props.intitialValues.title);
  const [content, setContent] = useState(props.intitialValues.content)
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
        <Text style={styles.label}>Enter Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={text=>setContent(text)} />
        <Button title="Save Blog Post" onPress={()=>props.onSubmit(title,content)} />
      </ScrollView>
    </View>
  );
}
BlogPostForm.defaultProps = {
  intitialValues:{
    title:'',
    content:''
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight:'100%',
    padding:10,
    flex:1
  },
  input:{
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    marginBottom:15,
    padding:5
  },
  label:{
    fontSize:20,
    marginBottom:5,
    marginLeft:5
  }
});

export default BlogPostForm;