import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY[300]};
`

export const Content = styled.View`
  flex-direction: row;
  padding: 56px 24px 42px;
  align-items: center;
  width: 100%;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY[800]
}))``

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`


export const CreateMain = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`