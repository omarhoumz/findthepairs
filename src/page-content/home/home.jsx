import { memo } from 'react'
import Head from 'next/head'
import {
  Layout,
  Col,
  Space,
  Typography,
  Divider,
  Select,
  Button,
  Row,
} from 'antd'

import { Container, ContentGrid, Controls, Header } from './home.styled'
import Card from 'src/component/card/card'
import { range } from 'src/utils/range'

const { Title } = Typography
const { Content, Sider } = Layout
const { Option } = Select

const Home = memo(function Home() {
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
                {range(20, 1).map((i) => (
                  <Col>
                    <Card />
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
                <Title level={2}>1 / 10</Title>
                <Title level={5}>Tries: 5</Title>
                <Divider />
                <Title level={4}>Options</Title>

                <Space size={20}>
                  <Title level={5}>Size</Title>
                  <Select defaultValue={20} style={{ width: 120 }}>
                    {range(21, 1).map((index) => (
                      <Option key={index + 1} value={index + 1}>
                        {index + 1} {index + 1 == 1 ? 'Pair' : 'Pairs'}
                      </Option>
                    ))}
                  </Select>
                </Space>
                <Button type="primary" size="large">
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
