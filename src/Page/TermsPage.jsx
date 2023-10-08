import React from 'react'
import { Typografy } from '../Ui/Typografy';
import { termsData } from '../data/termsData';
import { PrivacyMainText } from '../Components/Privacy/PrivacyMainText';



export const TermsPage = () => {

  return (
    <div className='max-w-[600px] mx-auto mb-[85px]'>
      <div className='mt-14 mb-6'>
        <Typografy type="titlePage">Terms and conditions</Typografy>
      </div>
      {
        termsData && termsData.map((data, count) => (
          <div className='mb-14' key={count}>
            {
              data.title && <Typografy type="titlePrivacy" key={data.title}>{data.title}</Typografy>
            }
            {
              data.text && <PrivacyMainText textObj={data.text} key={count} />
            }
          </div>
        ))
      }
    </div>
  )
}

