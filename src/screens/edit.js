import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { ContextStore } from '../context/Store';
import BlogPostForm from '../components/blogForm';


const EditScreen = props => {
	const {data,editBlogPost} = useContext(ContextStore);
	const post = data.find(blogpost => blogpost.id === props.navigation.getParam('id'));

  return(
    <BlogPostForm 
    intitialValues={{title:post.title, content:post.content}}
    onSubmit={(title,content)=>{
      editBlogPost(props.navigation.getParam('id'),title,content,()=>{props.navigation.pop()});
    }} />
  )
}

const styles = StyleSheet.create({});

export default EditScreen;