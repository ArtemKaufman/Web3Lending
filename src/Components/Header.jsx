import React from 'react';
import { Container } from './Container';
import { Button } from '../Ui/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBack = async () => {
    navigate(-1);
  };

  const isOnTermsPage = location.pathname === '/terms' || location.pathname === '/privacy';

  return (
    <div className="border-b border-[#263039]">

      <Container className={`flex  items-center h-[66px] ${isOnTermsPage ? 'justify-center' : 'justify-between'}`}>
        {
          isOnTermsPage && <div className="flex absolute left-9 opacity-50 hover:opacity-100">
            <img
              onClick={handleBack}
              src="./images/arrow-left-1.svg"
              alt="Vector"
              className='w-6 h-6 mr-[7px] cursor-pointer '
              
            />
            <p className='text-[16px] font-light leading-[27px] cursor-pointer '
              onClick={handleBack}
            >Back</p>
          </div>
        }

        <div className="w-[114px] h-8 hover:cursor-pointer flex items-center">
          <img src="./images/logo.svg" />
        </div>


        {
          !isOnTermsPage && <Button text="Book a demo" type="filledSmall" />
        }
      </Container>
    </div>
  );
};

{/* <a
  href="https://t.me/web3flows"
  target="blank"
  className="relative group"
>
  <img
    src="./images/Vector-3.svg"
    alt="Vector"
    className="group-hover:hidden"
  />

  <img
    src="./images/Vector-3-white.svg"
    alt="Another Image"
    className="hidden group-hover:block"
  /> */}
