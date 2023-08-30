import React from 'react';

export const Button = ({ type, text, widthBtn, onClick }) => {
  const buttonType =
    type === 'filled'
      ? ' bg-[#55E5C5]  border-none hover:bg-[#9DFFE9] hover:underline '
      : ' border border-[#263039] border-[2px] hover:text-[#55E5C5] hover:bg-[#131A21] ';

  return (
    <button
      onClick={onClick}
      className={`${buttonType} font-sm-bold px-4 py-[10px] text-[#263039] w-[${widthBtn}] h-[34px] font-medium text-sm leading-4`}
    >
      {text}
    </button>
  );
};
