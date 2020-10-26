import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { CardWrapper } from './card.styled'

const Card = memo(function Card({ img, isFlipped, onFlip }) {
  return (
    <CardWrapper onClick={onFlip}>
      {isFlipped ? (
        <img style={{ opacity: isFlipped ? 1 : 0 }} src={img} alt="" />
      ) : (
        <div style={{ opacity: isFlipped ? 0 : 1 }}>?</div>
      )}
    </CardWrapper>
  )
})

Card.propTypes = {
  img: PropTypes.string,
  isFlipped: PropTypes.bool,
  onFlip: PropTypes.func,
}

export default Card
