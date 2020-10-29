import { Col, Layout, Typography } from 'antd'
import Head from 'next/head'
import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { DEFAULT_NUM_PAIRS } from 'src/constants'
import { startGame } from 'src/store/actions'
import DefaultHead from '../head/default-head'

import { Container, ContentGrid, Header, PageSider } from './home.styled'
import CardsGrid from './sections/cards-grid'
import Controls from './sections/controls/controls'

const { Title } = Typography
const { Content } = Layout

const Home = memo(function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGame({ pairs: DEFAULT_NUM_PAIRS }))
  }, [])

  return (
    <Container>
      <DefaultHead />
      <Header>
        <Title level={2}>Find the pairs</Title>
      </Header>
      <Layout>
        <ContentGrid justify='center' gutter={16}>
          <Col xs={22} md={14}>
            <Content>
              <CardsGrid />
            </Content>
          </Col>
          <Col xs={22} sm={18} md={8} lg={6}>
            <PageSider width={262}>
              <Controls />
            </PageSider>
          </Col>
        </ContentGrid>
      </Layout>
    </Container>
  )
})

Home.propTypes = {}

export default Home
