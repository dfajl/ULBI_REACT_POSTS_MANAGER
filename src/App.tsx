import React from 'react';
import './styles/App.css'
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <PostItem
        post={{
          id: 1,
          title: 'JavaScript 1',
          body: 'Description'
        }}
      />
      <PostItem
        post={{
          id: 2,
          title: 'JavaScript 2',
          body: 'Description'
        }}
      />
      <PostItem
        post={{
          id: 3,
          title: 'JavaScript 3',
          body: 'Description'
        }}
      />
    </div>
  );
}

export default App;
