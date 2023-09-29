import styled from "styled-components/native";
import {ArrowLeft} from 'phosphor-react-native'

export const HeaderSummaryDetails = styled.View`
  margin-top: 50px;
  height: 200px;
  width: 100%;
  padding: 24px;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN[800]
}))``

export const HeaderTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
`

export const HeadeSubTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`