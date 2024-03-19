import React, { ReactNode } from 'react';
import classes from './UIButton.module.css'

type UIBtnProps = {
  children: ReactNode
  disabled?: boolean,
  onClick?: (event: React.MouseEvent) => void
}

const UIButton: React.FC<UIBtnProps> = ({children, ...props})=> {
  return (
    <button {...props} className={classes.UIBtn}>
      {children}
    </button>
  );
}

export default UIButton;