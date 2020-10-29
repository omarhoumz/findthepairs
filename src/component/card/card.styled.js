import styled from 'styled-components'

export const BaseCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 145.75px;
  width: 137px;
  margin-bottom: 20px;
`

export const CardWrapper = styled(BaseCard).attrs({
  as: 'button',
  type: 'button',
})`
  /** button resets */
  border: none;
  padding: 0;

  /** styles */
  font-size: 50px;

  border-radius: 4px;
  overflow: hidden;
  background-color: var(--color-primary-500);
  color: #ffffff;
  box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);

  transition: 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-property: background-color;

  :not(:disabled) {
    cursor: pointer;
  }

  :hover:not(:disabled),
  :focus {
    background-color: var(--color-primary-300);
  }

  :focus {
    outline-offset: 4px;
    outline-color: var(--color-primary-500);
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
