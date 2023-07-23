import { styled, css, keyframes } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors, fontSize } = DefaultTheme

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const ContantWrapperStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
interface GeneratorContainerType {
  status: 'On' | 'Off' | 'Error'
}
export const GeneratorContainerStyled = styled.div<GeneratorContainerType>`
  width: 100%;
  height: 100%;

  max-width: 250px;
  max-height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  & .text {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${fontSize.M};

    position: absolute;
    bottom: 40%;
    left: 105%;
    transform: translateY(calc(-50%));
    z-index: 5;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: ${fontSize.M};
    font-weight: 400;
    color: ${colors.white};

    background-color: ${colors.gray1};
    padding: 0.5rem;
    border-radius: 4px;

    & svg {
      ${(props) =>
        props.status === 'On'
          ? css`
              animation: ${spin} 2.5s linear infinite;
            `
          : ''}
    }

    &::before {
      content: '';
      border-style: solid;
      border-width: 8px;
      border-color: transparent ${colors.gray1} transparent transparent;

      position: absolute;
      top: 50%;
      left: -15px;
      z-index: 11;
      transform: translateY(-50%);
    }
  }
`
