import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { CardWrapper } from './card.styled'

const Card = memo(function Card(props) {
  return (
    <CardWrapper>
      <div>?</div>
    </CardWrapper>
  )
})

Card.propTypes = {}

export default Card
