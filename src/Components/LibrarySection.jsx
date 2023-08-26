import React from 'react';
import { Container } from './Container';
import { Typografy } from '../Ui/Typografy';

export const LibrarySection = () => {
  return (
    <section className="mt-[50px] sm:mt-[135px]  border-b border-[#263039]">
      <Container>
        <Typografy type="title">Library in 500+ flows</Typografy>
        <div className="flex flex-col sm:flex-row gap-[31px] mt-[25px] sm:mt-[45px]">
          <div className="">
            <Typografy type="description">
              We're bringing you the best of the web3 world. From big names like
              Binance and Kraken to favorites like Trust Wallet and Metamask,
              we're always on the lookout for top Web 3 products. Whether you're
              new or experienced in this space, we've got you covered.
            </Typografy>
          </div>
          <div className="min-w-[334px] min-h-[210px] sm:min-h-[329px] sm:min-w-[539px]">
            <img src="./images/illustration-5.svg" />
          </div>
        </div>
      </Container>
    </section>
  );
};
