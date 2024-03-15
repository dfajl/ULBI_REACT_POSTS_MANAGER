import React from 'react';
import { Post } from '../commonTypes';


type PostItemProps = {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({post})=> {
  return (
    <div className='post'>
        <div className="post__content">
            <strong>{post.id}. {post.title}</strong>
            <div>
                {post.body}
            </div>
            
        </div>
        <div className="post__btns">
            <button> Удалить </button>
        </div>
            

    </div>
  );
}

export default PostItem;
