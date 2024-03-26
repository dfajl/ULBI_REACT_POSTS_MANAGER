import React from 'react';
import PostItem from './PostItem';
import { Post } from '../commonTypes';
import UIHeader from './UIComponents/UIHeader/UIHeader'

type PostListProps = {
    posts: Post[],
    removePost: (post: Post)=> void
}

const PostList: React.FC<PostListProps> = ({posts, removePost})=> {
  return (
    <div>
        <UIHeader>Посты про JavaScript</UIHeader>
        {posts.map((post, index)=>
          <PostItem
            post = {post}
            key = {post.id}
            index = {index + 1}
            removePost = {removePost}
          />
        )}
    </div>
  );
}

export default PostList;
