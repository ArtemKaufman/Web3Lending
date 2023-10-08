import React from 'react'
import { Typografy } from '../../Ui/Typografy';

export const PrivacyTextAfterList = ({ textAfterListObj }) => {
  const text = Object.values(textAfterListObj);

  return (
    text.map(paragraph => (
      <Typografy type="descriptionPrivacy" key={`textAfterList ${paragraph}`}>
        {paragraph}
      </Typografy>
    ))
  )
}
