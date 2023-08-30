import React from 'react';

//description = текст маленького розміру, якщо не обираєш ніякого то буде великий текст

export const Typografy = ({ children, type, dark, className }) => {
  const stylesGeneration = () => {
    if (type == 'description') {
      return 'text-[16px] text-white font-light leading-[22px]';
    } else if (type == 'title') {
      return `font-medium text-white text-[28px] sm:text-[48px] font-normal leading-[34px] sm:leading-[58px]`;
    } else if (type == 'subtitle') {
      return 'font-medium text-white text-[20px] ';
    } else if (type == 'darkTitle') {
      return `font-medium text-[#131A21] text-[28px] sm:text-[48px] font-normal leading-[34px] sm:leading-[58px]`;
    }
  };
  const styles = stylesGeneration();
 
  return <p className={className + ' ' + styles}>{children}</p>;
};
