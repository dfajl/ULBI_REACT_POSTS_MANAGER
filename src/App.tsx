import { useState } from 'react';
import './styles/App.css'
import { Post } from './commonTypes';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import UIHeader from './components/UIComponents/UIHeader/UIHeader'

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'JavaScript 1',
      body: 'Description'
    },
    {
      id: 2,
      title: 'JavaScript 2',
      body: 'Description'
    },
    {
      id: 3,
      title: 'JavaScript 3',
      body: 'Description'
    }
  ])

  const createPost = (newPost: Post)=>{
    setPosts([...posts, newPost])
  }

  const removePost = (childrenPost: Post)=> {
	  setPosts(posts.filter(item => item.id !== childrenPost.id))
  }

  return (
    <div className="App">
      <PostForm createPost = {createPost}  />
      {posts.length !== 0 ? 
        <PostList posts={posts} removePost = {removePost}/> :
        <UIHeader>ПОСТЫ НЕ НАЙДЕНЫ (:</UIHeader>
      }
    </div>
  );
}

export default App;
