import React from 'react';
import { Typografy } from '../Ui/Typografy';
import { Container } from './Container';

export const OurExpertisingSection = () => {
  return (
    <section className="mt-[50px] sm:mt-[135px]  border-b border-[#263039]">
      <Container>
        <Typografy type="title">Expert Analysis and Scoring</Typografy>
        <div className="flex flex-col sm:flex-row gap-[31px] mt-[25px] sm:mt-[45px]">
          <div className="">
            <Typografy type="description">
              Our team of Web 3 UX experts conducts thorough analyses of each
              journey, evaluating them based on usability heuristics and best
              practices. Gain insights and understand what constitutes a
              superior user experience.
            </Typografy>
            <div className="flex gap-[17px] flex-col mt-[25px] sm:mt-[31px]">
              <div className="flex gap-3">
                <img src="./images/star.svg" />
                <Typografy type="description">
                  Detailed breakdowns of each user journey
                </Typografy>
              </div>
              <div className="flex gap-3">
                <img src="./images/star.svg" />
                <Typografy type="description">
                  Learn exactly what makes great UX in your space
                </Typografy>
              </div>
              <div className="flex gap-3">
                <img src="./images/star.svg" />
                <Typografy type="description">
                  Be inspired by the best, and avoid common pitfalls
                </Typografy>
              </div>
            </div>
          </div>
          <div className="min-w-[334px] min-h-[210px] sm:min-h-[339px] sm:min-w-[539px]">
            <img src="./images/illustration-3.svg" />
          </div>
        </div>
      </Container>
    </section>
  );
};
