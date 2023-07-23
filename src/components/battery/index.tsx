import { Lightning } from '@phosphor-icons/react'
import { BatteryContantStyled, BatteryWrapperStyled } from './battery.styled'

interface BatteryType {
  porcent: number
  volt: string
}

export function Battery({ porcent = 50, volt }: BatteryType) {
  return (
    <BatteryWrapperStyled>
      <BatteryContantStyled porcent={porcent}>
        <div className="voltage">
          <span>{volt}</span>
        </div>
        <div className="border">
          <div className="textPorcent">
            <Lightning size={20} weight="regular" />
            <span>{porcent}%</span>
          </div>
          <div className="background">
            <div className="porcent">
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </BatteryContantStyled>
    </BatteryWrapperStyled>
  )
}
