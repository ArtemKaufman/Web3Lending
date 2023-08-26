import React from 'react';
import { Typografy } from '../Ui/Typografy';
import { Container } from './Container';
import { Button } from '../Ui/Button';

export const IntroSection = () => {
  return (
    <section className="mt-[27px] sm:mt-[66px] border-b border-[#263039]">
      <Container className="text-white">
        <Typografy type="title">
          The leading tool for conducting competitive analysis in Web 3
        </Typografy>
        <div className="flex flex-col sm:flex-row mt-[13px] sm:mt-[30px] gap-[30px]">
          <div className="flex gap-6 sm:gap-[64px] flex-col ">
            <Typografy type="description">
              Benchmark your products against industry leaders with our curated
              global library of user journeys across crypto, NFT, and Web3
              projects. Browse recordings of end to end user journeys, gain
              insights, and stay ahead of competitors and industry standards.
            </Typografy>
            <Button text="Book a demo" type="filled" />
          </div>
          <div className="min-w-[334px] min-h-[200px] sm:min-h-[381px] sm:min-w-[635px] ">
            <img src="./images/illustration-1.svg" />
          </div>
        </div>
      </Container>
    </section>
  );
};
