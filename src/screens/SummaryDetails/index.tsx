import { Container,   } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from './components/Header'
import { Main } from "./components/Main";

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

      <Header
        percentage={percentage}
        handleGoBack={handleGoBack}
      />

      
      <Main />
       
    </Container>
  )
}