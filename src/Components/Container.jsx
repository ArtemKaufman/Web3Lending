import React from 'react';

export const Container = ({ children, className }) => {
  return (
    <div
      className={
        className +
        ` max-w-[480px] md:max-w-[768px] lg:max-w-[1109px] mx-auto px-5 sm:px-0`
      }
    >
      {children}
    </div>
  );
};
