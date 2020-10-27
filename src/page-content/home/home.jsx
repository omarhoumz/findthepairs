import {
  Button,
  Col,
  Divider,
  Layout,
  Row,
  Select,
  Space,
  Typography,
} from 'antd'
import Head from 'next/head'
import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'src/component/card/card'
import { DEFAULT_NUM_PAIRS } from 'src/constants'
import { flipCard, startGame } from 'src/store/actions'
import range from 'src/utils/range'

import { Container, ContentGrid, Controls, Header } from './home.styled'

const { Title } = Typography
const { Content, Sider } = Layout
const { Option } = Select

function getImgUrl(id) {
  return `/pairs/pair-${id}.jpg`
}

const Home = memo(function Home() {
  const score = useSelector((state) => state.score)
  const pairs = useSelector((state) => state.pairs)
  const tries = useSelector((state) => state.tries)
  const cards = useSelector((state) => state.cards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGame({ pairs: DEFAULT_NUM_PAIRS }))
  }, [])

  const handleRestartGame = useCallback(() => {
    dispatch(startGame())
  }, [])

  const handlePairsChange = useCallback((value) => {
    dispatch(startGame({ pairs: value }))
  }, [])

  const handleCardClick = useCallback((value) => {
    dispatch(flipCard({ cardId: value }))
  }, [])

  return (
    <Container>
      <Head>
        <title>Flipping Card Game</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header>
        <Title level={2}>Find the pairs</Title>
      </Header>
      <Layout>
        <ContentGrid justify="center" gutter={16}>
          <Col xs={22} md={14}>
            <Content>
              <Row gutter={16} justify="center">
                {cards.map(({ id, pairId, flipped }) => (
                  <Col key={id}>
                    <Card
                      img={getImgUrl(pairId)}
                      isFlipped={flipped}
                      onClick={() => handleCardClick(id)}
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Col>
          <Col xs={22} sm={18} md={8} lg={6}>
            <Sider
              width={262}
              style={{ backgroundColor: 'transparent', margin: 'auto' }}
            >
              <Controls direction="vertical" size={24}>
                <Title level={4}>Score</Title>
                <Title level={2}>{score} / 10</Title>
                <Title level={5}>Tries: {tries}</Title>
                <Divider />
                <Title level={4}>Options</Title>

                <Space size={20}>
                  <Title level={5}>Size</Title>
                  <Select
                    value={pairs}
                    onChange={handlePairsChange}
                    style={{ width: 120 }}
                  >
                    {range(21, 1).map((index) => (
                      <Option key={index} value={index}>
                        {index} {index == 1 ? 'Pair' : 'Pairs'}
                      </Option>
                    ))}
                  </Select>
                </Space>
                <Button type="primary" size="large" onClick={handleRestartGame}>
                  Restart
                </Button>
              </Controls>
            </Sider>
          </Col>
        </ContentGrid>
      </Layout>
    </Container>
  )
})

Home.propTypes = {}

export default Home
