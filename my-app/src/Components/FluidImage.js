import React from 'react'
import { Image } from 'semantic-ui-react'

const FluidImage = (props) => (
  <Image className="Image" src={props.src} fluid size = "small" />
)

export default FluidImage
