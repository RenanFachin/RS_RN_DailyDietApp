import { Container, Header, HeaderTitle, HeadeSubTitle, BackButton, BackIcon, Main, MainTitle, MainCard, MainCardTitle, MainCardSubTitle, MainCardSummary, MainCardSummarySuccess, MainCardSummaryError, MainCardSummaryTitle, MainCardSummarySubTitle } from "./styles";
import { useNavigation,useRoute  } from '@react-navigation/native'

type RouteParams = {
  percentage: number
}


export function SummaryDetails() {
  const route = useRoute()
  const { percentage } = route.params as RouteParams


  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>


        <HeaderTitle>
          {percentage}%
        </HeaderTitle>

        <HeadeSubTitle>
          das refeições dentro da dieta
        </HeadeSubTitle>
      </Header>

      <Main>
        <MainTitle>
          Estatísticas gerais
        </MainTitle>

        <MainCard>
          <MainCardTitle>
            22
          </MainCardTitle>

          <MainCardSubTitle>
            melhor sequência de pratos dentro da dieta
          </MainCardSubTitle>
        </MainCard>

        <MainCard>
          <MainCardTitle>
            109
          </MainCardTitle>

          <MainCardSubTitle>
            refeições registradas
          </MainCardSubTitle>
        </MainCard>

        <MainCardSummary>
          <MainCardSummarySuccess>
            <MainCardSummaryTitle>99</MainCardSummaryTitle>

            <MainCardSummarySubTitle>refeições dentro da dieta</MainCardSummarySubTitle>
          </MainCardSummarySuccess>

          <MainCardSummaryError>
            <MainCardSummaryTitle>10</MainCardSummaryTitle>

            <MainCardSummarySubTitle>refeições fora da dieta</MainCardSummarySubTitle>
          </MainCardSummaryError>
        </MainCardSummary>
      </Main>
    </Container>
  )
}