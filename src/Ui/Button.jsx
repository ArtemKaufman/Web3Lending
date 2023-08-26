import React from 'react';

export const Button = ({ type, text, onClick }) => {
  const buttonType =
    type === 'filled'
      ? ' bg-[#55E5C5]  border-none'
      : ' border border-[#263039] border-[2px]';

  return (
    <button
      onClick={onClick}
      className={`${buttonType} px-4 py-[10px] text-[#263039] w-[152px] h-[34px] font-medium text-sm `}
    >
      {text}
    </button>
  );
};
