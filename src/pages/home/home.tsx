import { CardWrapper } from '../../components/card'
import { LineChart } from '../../components/charts'
import { GridContainer, HomeContainerStyled } from './home.styled'
import { DefaultTheme } from '../../styles/theme/Default'
import { NavBar } from '../../components/navBar'
import { Humidity } from '../../components/humidity'
import { Battery } from '../../components/battery'
import { LampIndicator } from '../../components/lampIndicator'
import { Generator } from '../../components/generatorIndicate'

const { colors } = DefaultTheme

export function Home() {
  return (
    <HomeContainerStyled>
      <NavBar />
      <GridContainer>
        <CardWrapper>
          <h3>Histórico de temperatura</h3>
          <LineChart
            dataLegend={'Temperatura'}
            dataGraf={[10, 11, 8, 10, 10, 10, 11]}
            labels={[
              '8:30',
              '9:30',
              '10:30',
              '11:30',
              '12:30',
              '13:30',
              '14:30',
            ]}
            color={colors.purple}
            XLegend={[true, colors.gray7, 'center']}
            YLegend={[true, colors.gray7, 2, ' C°']}
            pointStyled={'circle'}
            // borderDashed={[4]}
            grafLegend={[false, 'bottom']}
            background={[false, colors.purple]}
          />
        </CardWrapper>
        <CardWrapper>
          <h3>Umidade da sala</h3>
          <Humidity porcent={72} />
        </CardWrapper>
        <CardWrapper>
          <h3>Bateria</h3>
          <Battery porcent={84} volt={`${45}V`} />
        </CardWrapper>
        <CardWrapper>
          <h3>Indicador de AC</h3>
          <LampIndicator OnOff={true} />
        </CardWrapper>
        <CardWrapper>
          <h3>Indicador de GMG</h3>
          <Generator status="On" />
        </CardWrapper>
      </GridContainer>
    </HomeContainerStyled>
  )
}
