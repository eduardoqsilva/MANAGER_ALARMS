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
        <div className="textPorcent">
          <span>{porcent}%</span>
        </div>
        <div className="border">
          <div className="voltage">
            <Lightning size={20} weight="regular" />
            <span>{volt}</span>
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
