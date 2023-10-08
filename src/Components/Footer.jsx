import React from 'react';
import { Container } from './Container';
import { Typografy } from '../Ui/Typografy';

export const Footer = () => {
  return (
    <footer>
      <Container className="flex flex-col sm:flex-row justify-between mt-[50px] mb-[37px] sm:mb-[52px] gap-[80px]">
        <div>
          <div className="w-[116px] h-[29px] mb-[12px]">
            <img src="./images/logo.svg" />
          </div>
          <Typografy type="description" className="max-w-[433px]">
            User flows library of crypto, NFT, and Web3 projects. Insights,
            experts reviews to enhance Web3 UX
          </Typografy>
        </div>
        <div>
          <h5 className="text-white font-medium mb-[13px] flex flex-wrap">
            PLATFORM
          </h5>
          <a
            href="/terms"
            className="block font-light text-lg leading-9 hover:cursor-pointer hover:underline"
          >
            Terms and Conditions
          </a>
          <a
            href="/privacy"
            className=" block font-light text-lg leading-9 hover:cursor-pointer hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="mailto:hello@web3flows.com"
            className="block font-light text-lg leading-9 hover:cursor-pointer hover:underline"
          >
            hello@web3flows.com
          </a>
        </div>
        <div>
          <h5 className="text-white font-medium mb-[13px]">FOLLOW</h5>
          <ul className="flex gap-8 hover:cursor-pointer items-center">
            <a
              href="https://twitter.com/web3_flows"
              target="blank"
              className="relative group"
            >
              <img
                src="./images/Vector.svg"
                alt="Vector"
                className="group-hover:hidden"
              />
              <img
                src="./images/Vector-white.svg"
                alt="Another Image"
                className="hidden group-hover:block"
              />
            </a>
            <a
              href="https://www.youtube.com/@web3flows"
              target="blank"
              className="relative group"
            >
              <img
                src="./images/Vector-2.svg"
                alt="Vector"
                className="group-hover:hidden"
              />
              <img
                src="./images/Vector-2-white.svg"
                alt="Another Image"
                className="hidden group-hover:block"
              />
            </a>
            <a
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
              />
            </a>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
