import React from 'react';

import defaultClasses from './SimpleButton.module.scss';

export interface SimpleButtonProps {
  children?: React.ReactNode;
  buttonClass?: string;
  section?: 'left' | 'right';
}

const SimpleButton: React.SFC<SimpleButtonProps> = (props) => {
  const { children, buttonClass, section } = props;
  const btnClassName = [
    defaultClasses.button,
    ...(section === 'left' ? [defaultClasses.buttonLeft] : []),
    ...(section === 'right' ? [defaultClasses.buttonRight] : []),
    buttonClass,
  ].join(' ');

  return <button className={btnClassName}>{children}</button>;
};

export default SimpleButton;
