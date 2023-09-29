import { Input } from "@components/Input";
import { Container, Content, Title, BackButton, BackIcon, CreateMain } from "./styles";
import { useNavigation } from '@react-navigation/native'

export function Create() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Content>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>

        <Title>
          Nova refeição
        </Title>
      </Content>

      <CreateMain>
        <Input inputLabel="Nome"/>
      </CreateMain>

    </Container>
  )
}