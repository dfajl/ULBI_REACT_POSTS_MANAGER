import React from 'react';
import { Post } from '../commonTypes';
import UIButton from './UIComponents/UIButton/UIButton';

type PostItemProps = {
  post: Post,
  index?: number,
  removePost: (post: Post)=> void
}

const PostItem: React.FC<PostItemProps> = ({post, index, removePost})=> {
  
  return (
    <div className='post'>
      <div className="post__content">
          <strong>{index}. {post.title}</strong>
          <div>
              {post.body}
          </div>
      </div>
      <div className="post__btns">
          <UIButton onClick={()=> removePost(post)}> Удалить </UIButton>
      </div>
    </div>
  );
}

export default PostItem;
