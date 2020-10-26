import styled from 'styled-components'

export const CardWrapper = styled.button.attrs({ type: 'button' })`
  /** button resets */
  border: none;
  padding: 0;

  /** styles */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 145.75px;
  width: 137px;

  margin-bottom: 20px;
  font-size: 50px;

  border-radius: 4px;
  background-color: #1890ff;
  color: #ffffff;
  box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);

  cursor: pointer;

  :focus {
    outline-offset: 4px;
  }

  > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 250ms opacity ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
