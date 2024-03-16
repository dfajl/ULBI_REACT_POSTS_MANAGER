import React from 'react';
import classes from './UIInput.module.css'

type UIInputProps = {
  placeholder?: string,
  type?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

const UIInput: React.FC<UIInputProps> = (props)=> {
  return (
    <input className={classes.UIInput} {...props}/>
  );
}

export default UIInput;