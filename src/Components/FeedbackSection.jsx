import React from 'react';
import { Typografy } from '../Ui/Typografy';
import { Container } from './Container';
import { Button } from '../Ui/Button';

export const FeedbackSection = () => {
  return (
    <section className="bg-[#55E5C5] pt-[100px] sm:pt-[50px] pb-[89px] sm:pb-[41px]">
      <Container className="flex flex-col sm:flex-row gap-[98px]">
        <div>
          <Typografy type="darkTitle" className="mb-[25px] sm:mb-[19px]">
            Ready to leave your competition in the dark?
          </Typografy>
          <Typografy className="mb-[25px] sm:mb-[28px] text-[#131A21]">
            Book a demo with our team and let’s chat through your needs.
          </Typografy>
          <Button text="Book a demo" widthBtn="185px" fontSize="base" />
        </div>
        <div className="mt-[41px] sm:mt-[104]">
          <img src="./images/cursor.svg" />
        </div>
      </Container>
    </section>
  );
};
