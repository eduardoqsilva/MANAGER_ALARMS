import {
  ContantWrapperStyled,
  GeneratorContainerStyled,
} from './generator.styled'
import generatorSvg from '../../assets/svgs/Gerador.svg'
import { DefaultTheme } from '../../styles/theme/Default'
import { Fan } from '@phosphor-icons/react'

const { colors } = DefaultTheme

interface GeneratorType {
  status: 'On' | 'Off' | 'Error'
}

export function Generator({ status }: GeneratorType) {
  const color = () => {
    switch (status) {
      case 'On':
        return colors.green
      case 'Off':
        return colors.gray7
      case 'Error':
        return colors.red
      default:
        return colors.gray7
    }
  }
  return (
    <ContantWrapperStyled>
      <GeneratorContainerStyled status={status}>
        <div className="text">
          <Fan size={25} weight="fill" color={color()} />
          <span>{status}</span>
        </div>
        <img src={generatorSvg} alt="" />
      </GeneratorContainerStyled>
    </ContantWrapperStyled>
  )
}
