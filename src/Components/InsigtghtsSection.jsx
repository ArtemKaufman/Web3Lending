import React from 'react';
import { Container } from './Container';
import { Typografy } from '../Ui/Typografy';

export const InsigtghtsSection = () => {
  return (
    <section className="mt-[50px] sm:mt-[135px]  border-b border-[#263039]">
      <Container>
        <Typografy type="title">
          Insights into the latest Web 3 trends
        </Typografy>
        <div className="flex flex-col sm:flex-row gap-[31px] mt-[25px] sm:mt-[45px]">
          <div className="">
            <Typografy type="description">
              Get your products ready to tackle challenges now and in the
              future. You can do this by using exclusive insights into the
              latest UX news and industry trends. This will help your products
              stay effective and up-to-date. Don't miss out on staying ahead and
              making your products even better!
            </Typografy>
          </div>
          <div className="min-w-[334px] min-h-[210px] sm:min-h-[329px] sm:min-w-[539px]">
            <img src="./images/illustration-4.svg" />
          </div>
        </div>
      </Container>
    </section>
  );
};
