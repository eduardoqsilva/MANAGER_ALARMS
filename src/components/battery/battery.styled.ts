/* eslint-disable quotes */
import { css, keyframes, styled } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors, fontSize } = DefaultTheme

const wave =
  "data:image/svg+xml,%3Csvg width='1300' height='207' viewBox='0 0 1300 207' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='1' d='M0 38.5629C600 238.563 650 -111.437 1300 38.5629V207H0V38.5629Z' fill='%23@'/%3E%3C/svg%3E"
const color01 = colors.green.replace('#', '')
const color02 = colors.red.replace('#', '')

export const Waves = keyframes`
  from {background-position: 0;}
  to {background-position: 295px;}
`

export const BatteryWrapperStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

interface BatteryContantType {
  porcent: number
}

export const BatteryContantStyled = styled.div<BatteryContantType>`
  width: 120px;
  height: 200px;
  padding: 7px;

  background-color: ${colors.card_color4};
  border-radius: 10px;

  position: relative;

  &::after {
    content: '';
    display: block;
    width: 35px;
    height: 15px;
    background-color: ${colors.card_color4};
    border-radius: 10px 10px 0 0;

    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  & .textPorcent {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;

    transform: translateY(-50%) translateX(-50%);

    font-size: ${fontSize.XL};
    font-weight: 500;
    color: ${colors.white};
  }

  & .border {
    width: 100%;
    height: 100%;
    padding: 4px;
    background-color: ${colors.card_color1};
    border-radius: 10px;

    & .voltage {
      position: absolute;
      bottom: ${(props) => props.porcent}%;
      left: 110%;
      transform: translateY(calc(${(props) => props.porcent}% + 5px));

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
  }

  & .background {
    width: 100%;
    height: 100%;
    border-radius: 7px;

    background-color: ${colors.card_color2};
    /* -webkit-box-shadow: inset 0px 0px 35px 19px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: inset 0px 0px 35px 19px rgba(0, 0, 0, 0.37);
    box-shadow: inset 0px 0px 35px 19px rgba(0, 0, 0, 0.37); */

    display: flex;
    align-items: end;
    overflow: hidden;

    & .porcent {
      width: 100%;
      height: ${(props) => (props.porcent < 10 ? 10 : props.porcent)}%;
      background-color: ${(props) =>
        props.porcent > 30 ? colors.green : colors.red};

      position: relative;
      z-index: 2;
      transform: translateY(10px);

      & .wave {
        width: 100%;
        height: 20px;
        /* background-color: blue; */

        background-repeat: repeat-x;
        background-size: contain;
        fill: red;

        animation: ${Waves} 6s linear infinite;

        position: absolute;
        top: -10px;
        z-index: 0;

        ${
          (props) =>
            props.porcent > 30
              /*eslint-disable */
              ?  css`
                  background-image: url("${wave.replace('@', color01)}");
                `
              : css`
                  background-image: url("${wave.replace('@', color02)}");
                `
              /* eslint-enable */
        }
      }
    }
  }
`
