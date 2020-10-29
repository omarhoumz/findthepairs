import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { BaseCard, CardWrapper } from './card.styled'

export const CARD_STATES = {
  IDLE: 'IDLE',
  FLIPPED: 'FLIPPED',
  HIDDEN: 'HIDDEN',
}

const Card = memo(function Card({ img, state, onClick, isDisabled }) {
  if (state === CARD_STATES.HIDDEN) {
    return <BaseCard />
  }

  let body = null
  switch (state) {
    case CARD_STATES.IDLE:
      body = <div>?</div>
      break

    case CARD_STATES.FLIPPED:
      body = <img src={img} alt="" />
      break

    default:
      body = null
      break
  }

  return (
    <CardWrapper
      aria-disabled={Boolean(isDisabled)}
      disabled={Boolean(isDisabled)}
      onClick={onClick}
    >
      {body}
    </CardWrapper>
  )
})

Card.propTypes = {
  img: PropTypes.string,
  isFlipped: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Card
