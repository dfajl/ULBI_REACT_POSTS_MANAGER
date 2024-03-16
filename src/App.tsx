import React, { useState } from 'react';
import './styles/App.css'

import PostList from './components/PostList';
import UIButton from './components/UIComponents/UIButton/UIButton';
import UIInput from './components/UIComponents/UIInput/UIInput';


function App() {

const [posts, setPosts] = useState([
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

const [title, setTitle] = useState('')
const [body, setBody] = useState('')

const addNewPost = (event: React.MouseEvent)=>{
  event.preventDefault()
  console.log(title)
  console.log(body)
}

  return (
    <div className="App">
      <form action="">
        <UIInput 
          placeholder='Название поста'
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <UIInput
          value={body}
          type='text'
          placeholder='Описание поста'
          onChange={event => setBody(event.target.value)}
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
