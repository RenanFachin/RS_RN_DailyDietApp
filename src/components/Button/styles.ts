import styled from "styled-components/native";
import { Plus } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};

`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  weight: "bold",
  color: theme.COLORS.WHITE
}))``