import React from 'react'
import { PrivacyListItem } from './PrivacyListItem';

export const PrivacyList = ({listObj}) => {
  const list = Object.values(listObj);

  return (
    <ul className='list-disc px-6'>
    {
      list.map(li => (
        <PrivacyListItem li={li} key={li}/>
      ))
    }
    </ul>
  )
}
