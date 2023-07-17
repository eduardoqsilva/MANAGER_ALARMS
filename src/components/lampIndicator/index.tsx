import { ContainerStyled, LampContainerStyled } from './lampIndicartor.styled'
import lamp from '../../assets/pngs/lamp.png'
import { LightbulbFilament } from '@phosphor-icons/react'

interface LampIndicatorType {
  OnOff: boolean
}

export function LampIndicator({ OnOff }: LampIndicatorType) {
  return (
    <ContainerStyled>
      <LampContainerStyled OnOff={OnOff}>
        <div className="text">
          <LightbulbFilament width={20} weight="regular" />
          <span>{OnOff === true ? 'Ligado' : 'Desligado'}</span>
        </div>
        <img src={lamp} alt="lamp" />
      </LampContainerStyled>
    </ContainerStyled>
  )
}
