import React from 'react';
import { Container } from './Container';
import { Button } from '../Ui/Button';

export const Header = () => {
  return (
    <div className="border-b border-[#263039]">
      <Container className="flex justify-between items-center h-[66px]">
        <div className="w-[114px] h-8 hover:cursor-pointer flex items-center">
          <img src="./images/logo.svg" />
        </div>
        <Button text="Book a demo" type="filled" />
      </Container>
    </div>
  );
};
