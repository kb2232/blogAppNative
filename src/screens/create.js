import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { ContextStore } from '../context/Store';
import BlogPostForm from '../components/blogForm';
const CreateScreen = props => {
  const {addBlogPost} = useContext(ContextStore)
  return (
    <BlogPostForm 
      onSubmit={(title,content)=>{
        addBlogPost(title,content,()=>props.navigation.navigate('Index'));
      }} 
    />
  )
}

const styles = StyleSheet.create({});

export default CreateScreen;