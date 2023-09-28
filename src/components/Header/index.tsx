import { Container, Logo, UserImgContainer, UserImg } from "./styles"
import logoImg from '@assets/logo.png'



export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <UserImgContainer>
        <UserImg source={
          { uri: 'https://github.com/RenanFachin.png' }
        } />
      </UserImgContainer>
    </Container>
  )
}