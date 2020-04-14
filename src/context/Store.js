import React, { useReducer } from 'react';

export const ContextStore = React.createContext();

const blogReducer = (blogpost, action)=>{
	switch (action.type) {
		case 'delete_blogpost':
			return blogpost.filter((el)=> el.id !== action.payload);
		case 'edit_blogpost':
			return blogpost.map(post=>{
				return post.id === action.payload[0] ? {id:action.payload[0],title:action.payload[1],content:action.payload[2]} : post;
			});
		case 'add_blogpost':
			return [...blogpost, 
				{
					id: Math.floor(Math.random()*99999),
					title:action.payload[0],
					content:action.payload[1]
				}
			];
	
		default:
			return blogpost;
	}
}

export const BlogStoreProvider = ({ children }) => {
	const [blogposts, dispatch] = useReducer(blogReducer,[]);

	const addBlogPost = (title, content, cb) => {
		try {
			dispatch({ type: 'add_blogpost', payload:[title,content]});
			cb();
		} catch (error) {
			console.log(error)
		}
	}
	const editBlogPost = (id, title, content,cb)=>{
		try {
			dispatch({
				type:'edit_blogpost',
				payload:[id,title,content]
			});
			cb();
		} catch (error) {
			console.log({error})
		}
	}
	const deletePost = id=>{
		return dispatch({type:'delete_blogpost', payload:id})
	}
	return (
		<ContextStore.Provider value={{ data:blogposts,addBlogPost, deletePost,editBlogPost}}>
			{children}
		</ContextStore.Provider>
	);
};
