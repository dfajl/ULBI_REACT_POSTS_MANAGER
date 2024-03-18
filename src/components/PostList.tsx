import React from 'react';
import PostItem from './PostItem';
import { Post } from '../commonTypes';

type PostListProps = {
    posts: Post[] 
}

const PostList: React.FC<PostListProps> = ({posts})=> {
  return (
    <div>
        {posts.map((post, index)=>
            <PostItem
                post = {post}
                key = {post.id}
                index = {index + 1}
            />
        )}
    </div>
  );
}

export default PostList;
