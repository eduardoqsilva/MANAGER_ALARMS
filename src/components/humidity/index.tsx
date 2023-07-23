import { ContentWrapperStyled, WrapperWaveStyled } from './humidity.styled'
import waves from '../../assets/svgs/waves.svg'
import { Drop } from '@phosphor-icons/react'

interface HumidityType {
  porcent: number
}

export function Humidity({ porcent }: HumidityType) {
  return (
    <ContentWrapperStyled>
      <div className="text">
        <Drop size={28} weight="regular" />
        <span>{porcent}%</span>
      </div>
      <WrapperWaveStyled porcent={porcent}>
        <div className="porcent">
          <img className="waves" src={waves} alt="." />
        </div>
      </WrapperWaveStyled>
    </ContentWrapperStyled>
  )
}
