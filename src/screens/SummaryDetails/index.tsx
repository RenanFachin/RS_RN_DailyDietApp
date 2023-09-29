import { Container, ProgressTypeStyleProps } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from './components/Header'
import { Main } from "./components/Main";

type RouteParams = {
  percentage: number
}

interface SummaryDetails {
  progressType?: ProgressTypeStyleProps
}


export function SummaryDetails({ progressType }: SummaryDetails) {
  const route = useRoute()
  const { percentage } = route.params as RouteParams

  if (percentage > 50) {
    progressType = 'GOOD'
  }

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container progressType={progressType}>

      <Header
        percentage={percentage}
        handleGoBack={handleGoBack}
      />


      <Main />

    </Container>
  )
}