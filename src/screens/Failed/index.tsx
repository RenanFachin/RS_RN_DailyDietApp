import { Button } from '@components/Button'
import { Container, Content, Title, Subtitle, Highlight, Image } from './styles'
import { useNavigation } from '@react-navigation/native'

import FailedImage from '@assets/unsuccessfulImage.png'

export function Failed() {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Content>
        <Title>Que pena!</Title>
        <Subtitle>
          Você
          <Highlight>
            {` saiu da dieta `}
          </Highlight>
          dessa vez, mas continue se esforçando e não desista!
        </Subtitle>
      </Content>

      <Image source={FailedImage} />


      <Button
        onPress={handleGoBack}
        title="Ir para a página inicial"
      />

    </Container>
  )
}