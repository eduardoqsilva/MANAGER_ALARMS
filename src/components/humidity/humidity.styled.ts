import { styled } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/Default'

const { colors } = DefaultTheme

export const ContentWrapperStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & .text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 10;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: 32px;
    font-weight: 500;
  }
`
interface WaveType {
  porcent: number
}

export const WrapperWaveStyled = styled.div<WaveType>`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;

  aspect-ratio: 1/1;

  border-radius: 50%;
  border: 1px solid ${colors.card_color3};
  background-color: ${colors.card_color3};
  overflow: hidden;

  display: flex;
  align-items: end;
  justify-content: center;

  -webkit-box-shadow: inset 0px 0px 49px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 49px 5px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 49px 5px rgba(0, 0, 0, 0.75);

  & .porcent {
    width: 100%;
    height: ${(props) =>
      props.porcent > 10 ? props.porcent - 10 : props.porcent}%;

    position: relative;
    background-color: ${colors.blue_dark};
    z-index: 1;

    transform: translateY(20px);

    & .waves {
      width: 100%;
      height: fit-content;

      position: absolute;
      bottom: 87%; //165px top | 87%
      z-index: 0;
    }
  }
`
