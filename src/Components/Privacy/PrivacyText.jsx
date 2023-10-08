import React from 'react'
import { Typografy } from '../../Ui/Typografy'

export const PrivacyText = ({ textObj }) => {
  const text = Object.values(textObj);

  return (
    text.map(paragraph => (
      <Typografy type="descriptionPrivacy" key={paragraph}>
        {paragraph}
      </Typografy>
    ))


  )
}
