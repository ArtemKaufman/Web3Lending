import React from 'react';
import { Typografy } from '../Ui/Typografy';
import { Container } from './Container';

export const DiscoverSection = () => {
  return ( 
    <section className="mt-[50px] sm:mt-[135px]  border-b border-[#263039]">
      <Container> 
        <Typografy type="title">Discover Web 3 insights</Typografy>
        <div className="flex flex-col sm:flex-row gap-[31px] mt-[25px] sm:mt-[45px]">
          <div className="min-w-[335px] min-h-[210px] sm:min-h-[339px] sm:min-w-[539px] order-2 sm:order-1">
            <img src="./images/illustration-2.svg" />
          </div>
          <div className="order-1 sm:order-2">
            <Typografy type="description">
              Immerse in competitor experiences with video walkthroughs of Web 3
              accounts across channels. Access carefully selected collection of
              user journeys recordings from leading Web 3 brands worldwide,
              gaining valuable insights to enhance your offerings.
            </Typografy>
            <div className="flex gap-[17px] flex-col mt-[25px] sm:mt-[31px]">
              <div className="flex gap-3">
                <img src="./images/star.svg" />
                <Typografy type="description">
                  Watch everything from crypto and NFT to Web 3 music apps
                  journeys
                </Typografy>
              </div>
              <div className="flex gap-3">
                <img src="./images/star.svg" />
                <Typografy type="description">
                  Accelerate collaboration, share screenshots and GIFs
                </Typografy>
              </div>
              <div className="flex gap-3">
                <img src="./images/star.svg" />
                <Typografy type="description">
                  Level up your design and product presentations
                </Typografy>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
