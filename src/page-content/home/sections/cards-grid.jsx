import { Col, Row } from 'antd'
import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'src/component/card/card'
import { flipCard } from 'src/store/actions'

function getImgUrl(id) {
  return `/pairs/pair-${id}.jpg`
}

const CardsGrid = memo(function CardsGrid() {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.cards)
  const locked = useSelector((state) => state.locked)

  const handleCardClick = useCallback((value) => {
    if (locked) return
    dispatch(flipCard({ cardId: value }))
  }, [])

  return (
    <Row gutter={16} justify='center'>
      {cards.map(({ id, pairId, state }) => (
        <Col key={id}>
          <Card
            img={getImgUrl(pairId)}
            state={state}
            onClick={() => handleCardClick(id)}
            isDisabled={locked}
          />
        </Col>
      ))}
    </Row>
  )
})

export default CardsGrid
