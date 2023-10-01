import { Container, Content, Subtitle, Title, Image, Highlight } from "./styles";
import { Button } from '@components/Button'

import SuccessImage from '@assets/successImage.png'
import { useNavigation } from '@react-navigation/native'

export function Success() {

  const navigation = useNavigation()

  function handleGoBack(){
    navigation.navigate('home')
  }

  return (
    <Container>
      <Content>
        <Title>Continue assim!</Title>
        <Subtitle>
          Você continua
          <Highlight>
            {` dentro da dieta.`}
          </Highlight>
          Muito bem!
        </Subtitle>
      </Content>

      <Image source={SuccessImage} />


      <Button 
      onPress={handleGoBack}
      title="Ir para a página inicial" 
      />

    </Container>
  )
}