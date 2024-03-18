import React from 'react';
import { Post } from '../commonTypes';

type PostItemProps = {
  post: Post,
  index?: number
}

const PostItem: React.FC<PostItemProps> = ({post, index})=> {
  return (
    <div className='post'>
      <div className="post__content">
          <strong>{index}. {post.title}</strong>
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
