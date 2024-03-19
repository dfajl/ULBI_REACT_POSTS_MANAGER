import React, { useState} from 'react';
import { Post } from '../commonTypes';

import UIButton from './UIComponents/UIButton/UIButton';
import UIInput from './UIComponents/UIInput/UIInput';

type PostFormProps = {
	createPost: (newPost: Post)=> void,
}

const PostForm: React.FC<PostFormProps> = ({createPost})=> {

    const [post, setPost] = useState<Post>(
        {
            title: '', body: '', id: Date.now()
        }
    )

	//const bodyInputRef = useRef(null); 
    //console.log(bodyInputRef.current) пример НЕУПРАВЛЯЕМОГО компонента

    const addNewPost = (event: React.MouseEvent)=>{
        event.preventDefault()
        if (post.title || post.body){
		    const newPost = {
                ...post,
                id: Date.now()
		    }
		    createPost(newPost)
            setPost({title: '', body: '', id: Date.now()}) // очищаем инпуты
        } else return    
    }

    return (
        <div className="App">
            <form>
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
        </div>
    );
}

export default PostForm;
