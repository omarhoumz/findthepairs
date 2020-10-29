import { Layout, Row } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import styled from 'styled-components'

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

export const PageSider = styled(Sider)`
  background-color: transparent;
  margin: auto;
`
