import React from 'react'
import { Typografy } from '../Ui/Typografy';
import { privacyData } from '../data/privacyData';
import { PrivacyText } from '../Components/Privacy/privacyText';
import { PrivacyList } from '../Components/Privacy/PrivacyList';
import { PrivacyTextAfterList } from '../Components/Privacy/PrivacyTextAfterList';


export const PrivacyPolicy = () => {

  return (
    <div className='max-w-[600px] mx-auto mb-[85px]'>
      <div className='mt-14 mb-6'>
        <Typografy type="titlePage">Privacy Policy</Typografy>
      </div>
      {
        privacyData && privacyData.map((data, count) => (
          <div className='mb-14' key={count}>
          {
            data.title && <Typografy type="titlePrivacy" key={data.title}>{data.title}</Typografy>
          }
            
            <PrivacyText textObj={data.text} key={count} />
            {
              data.list && <PrivacyList listObj={data.list} key={`PrivacyList ${count}`} />
            }
            {
              data.textAfterList && <PrivacyTextAfterList textAfterListObj={data.textAfterList} key={`textAfterList ${count}`} />
            }
          </div>
        ))
      }
    </div>
  )
}
