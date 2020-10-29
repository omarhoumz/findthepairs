import { Space, Typography } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled(Space)`
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

export const ScoreText = styled(Typography.Text)`
  color: ${({ theme: { colors } }) => colors.primary[500]} !important;
`
