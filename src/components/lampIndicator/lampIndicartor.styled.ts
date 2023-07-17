import { styled, keyframes, css } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors, fontSize } = DefaultTheme

const ON = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const OFF = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
interface LampContainerType {
  OnOff: boolean
}
export const LampContainerStyled = styled.div<LampContainerType>`
  width: 100%;
  height: 100%;
  max-width: fit-content;
  max-height: 250px;

  position: relative;
  /* background-color: red; */
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 1px;
    background-color: ${colors.yellow};

    position: absolute;
    top: 30%;
    left: 50%;

    -webkit-box-shadow: 0px 0px 80px 50px ${colors.yellow};
    -moz-box-shadow: 0px 0px 80px 50px ${colors.yellow};
    box-shadow: 0px 0px 80px 50px ${colors.yellow};

    ${(props) =>
      props.OnOff
        ? css`
            animation: ${ON} 0.5s ease-in forwards;
          `
        : css`
            animation: ${OFF} 0.5s ease-in forwards;
          `}
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & .text {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${fontSize.M};

    position: absolute;
    bottom: 40%;
    left: 110%;
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
