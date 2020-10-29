import { Button, Divider, Select, Space, Typography } from 'antd'
import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startGame } from 'src/store/actions'
import range from 'src/utils/range'

import { ScoreText, Wrapper } from './controls.styled'

const { Title } = Typography
const { Option } = Select

const Controls = memo(function Controls() {
  const dispatch = useDispatch()
  const score = useSelector((state) => state.score)
  const pairs = useSelector((state) => state.pairs)
  const tries = useSelector((state) => state.tries)

  const handleRestartGame = useCallback(() => {
    dispatch(startGame())
  }, [])

  const handlePairsChange = useCallback((value) => {
    dispatch(startGame({ pairs: value }))
  }, [])

  return (
    <Wrapper direction='vertical' size={24}>
      <Title level={4} as='span'>
        Score
      </Title>
      <Title level={2}>
        <ScoreText>{score}</ScoreText> / {pairs}
      </Title>

      <Title level={5}>Tries: {tries}</Title>

      <Divider />

      <Title level={4}>Options</Title>

      <Space size={20}>
        <Title level={5}>Size</Title>
        <Select
          value={pairs}
          onChange={handlePairsChange}
          style={{ minWidth: 120 }}
        >
          {range(21, 1).map((index) => (
            <Option key={index} value={index}>
              {index} {index == 1 ? 'Pair' : 'Pairs'}
            </Option>
          ))}
        </Select>
      </Space>

      <Button type='primary' size='large' onClick={handleRestartGame}>
        Restart
      </Button>
    </Wrapper>
  )
})

Controls.propTypes = {}

export default Controls
