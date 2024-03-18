import React, { useState, useRef } from 'react';
import './styles/App.css'
import { Post } from './commonTypes';

import PostList from './components/PostList';
import UIButton from './components/UIComponents/UIButton/UIButton';
import UIInput from './components/UIComponents/UIInput/UIInput';


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
const [post, setPost] = useState<Post>({title: '', body: '', id: Date.now()})

//const bodyInputRef = useRef(null); 
//пример НЕУПРАВЛЯЕМОГО компонента

const addNewPost = (event: React.MouseEvent)=>{
  event.preventDefault()
  //console.log(bodyInputRef.current) пример НЕУПРАВЛЯЕМОГО компонента

  setPosts([...posts, {...post, id: Date.now()}])
  setPost({title: '', body: '', id: Date.now()}) // очищаем инпуты
  
}

  return (
    <div className="App">
      <form action="">
        <UIInput 
          placeholder='Название поста'
          type='text'
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
        />
        <UIInput
          /* ref={bodyInputRef} */
          value={post.body}
          type='text'
          placeholder='Описание поста'
          onChange={event => setPost({...post, body: event.target.value})}
        />
        <UIButton onClick={addNewPost}>
          Добавить пост
        </UIButton>
      </form>
      
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
