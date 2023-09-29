import { MainCard } from '../MainCard'
import { Container, MainTitle, MainCardContainer, MainCardTitle, MainCardSubTitle } from './styles'

export function Main() {
  return (
    <Container>
      <MainTitle>
        Estatísticas gerais
      </MainTitle>

      <MainCardContainer>
        <MainCardTitle>
          22
        </MainCardTitle>

        <MainCardSubTitle>
          melhor sequência de pratos dentro da dieta
        </MainCardSubTitle>
      </MainCardContainer>

      <MainCardContainer>
        <MainCardTitle>
          109
        </MainCardTitle>

        <MainCardSubTitle>
          refeições registradas
        </MainCardSubTitle>
      </MainCardContainer>

      <MainCard />
    </Container>
  )
}