import { Layout, Typography, Row, Space } from 'antd'
import styled from 'styled-components'

const { Title } = Typography
const { Header: DHeader } = Layout

export const Container = styled(Layout)`
  min-height: 100vh;
`

export const Header = styled(DHeader)`
  height: 110px;
  background-color: transparent;
  display: flex;

  > h2 {
    margin: auto;
  }
`

export const ContentGrid = styled(Row)`
  width: 100%;
  padding-bottom: 2em;
`

export const Controls = styled(Space)`
  background: #fbfbfb;
  border-radius: 4px;
  width: 100%;
  padding: 12px 16px;

  .ant-typography,
  .ant-divider {
    margin-bottom: 0;
    color: #232527;
  }

  .ant-divider {
    margin-top: 0;
  }
`
