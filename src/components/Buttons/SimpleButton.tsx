import React from 'react';

import defaultClasses from './SimpleButton.module.scss';

export interface SimpleButtonProps {
  title: string;
  children?: React.ReactNode;
  buttonClass?: string;
  section?: 'left' | 'right';
}

const SimpleButton: React.SFC<SimpleButtonProps> = (props) => {
  const { children, buttonClass, section, title } = props;
  const btnClassName = [
    defaultClasses.button,
    ...(section === 'left' ? [defaultClasses.buttonLeft] : []),
    ...(section === 'right' ? [defaultClasses.buttonRight] : []),
    buttonClass
  ].join(' ');

  return (
    <button title={title} className={btnClassName}>
      {children}
    </button>
  );
};

export default SimpleButton;
