import React from 'react';

export const Typografy = ({ children, type, dark, className }) => {
  const stylesGeneration = () => {
//description
    if (type == 'description') {
      return 'text-[16px] text-white font-light leading-[22px]';
    } else if (type == 'descriptionPrivacy') {
      return 'text-[18px] text-white font-light leading-[27px] mt-5';
    } 
//title
    else if (type == 'title') {
      return `font-mediumStyle text-white text-[28px] sm:text-[48px] font-normal leading-[34px] sm:leading-[58px]`;
    } else if (type == 'titlePage') {
      return `font-mediumStyle text-white text-[32px] font-normal leading-[34px] sm:leading-[58px]`;
    }else if (type == 'titlePrivacy') {
      return `font-mediumStyle text-white text-[28px] font-bold leading-[34px] sm:leading-[36px]`;
    } else if (type == 'subtitle') {
      return 'font-mediumStyle text-white text-[20px] ';
    } else if (type == 'darkTitle') {
      return `font-mediumStyle text-[#131A21] text-[28px] sm:text-[48px] font-normal leading-[34px] sm:leading-[58px]`;
    }
  };
  const styles = stylesGeneration();

  return <p className={className + ' ' + styles}>{children}</p>;
};
