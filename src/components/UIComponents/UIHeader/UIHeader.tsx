import React, { ReactNode } from 'react';

import classes from './UIHeader.module.css'

type UIHeaderProps = {
  children: ReactNode
}

const UIHeader: React.FC<UIHeaderProps> = ({children, ...props})=> {
  return (
    <h1 className={classes.UIHeader} {...props}>
      {children}
    </h1>
  );
}

export default UIHeader;