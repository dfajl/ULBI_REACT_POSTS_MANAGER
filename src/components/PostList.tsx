import React from 'react';
import PostItem from './PostItem';
import { Post } from '../commonTypes';

type PostListProps = {
    posts: Post[] 
}

const PostList: React.FC<PostListProps> = ({posts})=> {
  return (
    <div>
        {posts.map((post)=>
            <PostItem
                post = {post}
                key = {post.id}
            />
        )}
    </div>
  );
}

export default PostList;
