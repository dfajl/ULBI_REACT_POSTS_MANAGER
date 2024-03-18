/* 
  это пример НЕУПРАВЛЯЕМОГО компонента через forwardRef
  и соответствующую типизацию. Но на практике все же лучше пользоваться
  управляемым компонентом через value. Поэтому код неуправляемого компонента
  комментирую, чтобы был пример его типизации. ЮЗАТЬ БУДУ УПРАВЛЯЕМЫЙ КОМПОНЕНТ
*/

/* import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import classes from './UIInput.module.css'

type UIInputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string,
  type?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

const UIInput: ForwardRefRenderFunction<HTMLInputElement, UIInputProps> = (
  (props, ref)=> {
    return (
      <input ref={ref} className={classes.UIInput} {...props}/>
    );
  }
)

export default forwardRef(UIInput); */

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