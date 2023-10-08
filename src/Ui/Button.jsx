import React from 'react';

export const Button = ({ type, text, onClick }) => {
  let buttonType = '';
  if (type === 'filledSmall') {
    buttonType =
      'fontStyle-bold bg-[#55E5C5] text-[#263039] py-[10px] px-[16px] text-[14px]  border-none hover:bg-[#9DFFE9] hover:underline leading-[14px]';
  } else if (type === 'filled') {
    buttonType =
      'fontStyle-bold bg-[#55E5C5] text-[#263039] py-[12px] px-[22.5px] text-[16px]  border-none hover:bg-[#9DFFE9] hover:underline leading-[16px]';
  } else {
    buttonType =
      'fontStyle-bold border border-[#263039] text-[#263039] border-[2px] hover:text-[#55E5C5] hover:bg-[#131A21] py-[12px] px-[24px] text-[16px] leading-[16px]';
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonType}  font-medium transition duration-300`}
    >
      {text}
    </button>
  );
};
