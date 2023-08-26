import React from 'react';
import { Container } from './Container';
import { Typografy } from '../Ui/Typografy';

export const ProofSection = () => {
  return (
    <section className="border-b border-[#263039]">
      <Container className="mt-[48px] sm:mt-[93px]">
        <Typografy type="title">Why web3flows?</Typografy>
        <div className="flex flex-col sm:flex-row justify-between gap-[30px] mt-[26px] sm:mt-[98px] mb-[50px] sm:mb-[80px] ">
          <div className="w-[335px] sm:w-[350px]">
            <div className="h-[92px] w-[92px] mb-[27px]">
              <img src="./images/proof/Frame.svg" />
            </div>
            <Typografy type="subtitle" className="mb-[16px]">
              Improve your offerings
            </Typografy>
            <Typografy type="description">
              Understand how you compare to competitors and the industry as a
              whole, and discover ways to gain an advantage.
            </Typografy>
          </div>

          <div className="w-[335px] sm:w-[350px]">
            <div className="h-[92px] w-[92px] mb-[27px]">
              <img src="./images/proof/Frame-2.svg" />
            </div>
            <Typografy type="subtitle" className="mb-[16px]">
              Lead your market
            </Typografy>
            <Typografy type="description">
              Identify untapped market gaps quickly and be the first to
              introduce innovative digital products and features.
            </Typografy>
          </div>
          <div className="w-[335px] sm:w-[350px]">
            <div className="h-[92px] w-[92px] mb-[27px]">
              <img src="./images/proof/Frame-3.svg" />
            </div>
            <Typografy type="subtitle" className="mb-[16px]">
              De-risk product strategy
            </Typografy>
            <Typografy type="description">
              No more trial and error. Learn how market leaders have addressed
              the same challenges, build on their successes, and avoid their
              mistakes.
            </Typografy>
          </div>
        </div>
      </Container>
    </section>
  );
};
