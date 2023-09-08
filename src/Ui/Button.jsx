import React from 'react';

export const Button = ({ type, text, onClick }) => {
  let buttonType = '';
  if (type === 'filledSmall') {
    buttonType =
      ' bg-[#55E5C5] text-[#263039] py-[10px] px-[16px] text-[14px] border-none hover:bg-[#9DFFE9] hover:underline h-[34px] leading-4';
  } else if (type === 'filled') {
    buttonType =
      ' bg-[#55E5C5] text-[#263039] py-[12px] px-[24px] text-[16px] border-none hover:bg-[#9DFFE9] hover:underline h-[40px] leading-3';
  } else {
    buttonType =
      ' border border-[#263039] text-[#263039] border-[2px] hover:text-[#55E5C5] hover:bg-[#131A21] py-[12px] px-[24px] text-[16px] h-[40px] leading-3';
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
