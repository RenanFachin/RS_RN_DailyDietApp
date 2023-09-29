import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN[100]};
`

export const Header = styled.View`
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

export const Main = styled.View`
  flex: 1;
  padding: 33px 24px 261px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  gap: 12px;
`

export const MainTitle = styled.Text`
  text-align: center;
  margin-bottom: 23px;

  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const MainCard = styled.View`
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY[200]};
`

export const MainCardTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE["XL"]}px;
`

export const MainCardSubTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE["SM"]}px;
`

export const MainCardSummary = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const MainCardSummarySuccess = styled.View`
  border-radius: 8px;
  flex: 1;
  padding: 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN[100]};
`


export const MainCardSummaryError = styled.View`
  border-radius: 8px;
  flex: 1;
  padding: 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.RED[100]};
`


export const MainCardSummaryTitle = styled.Text`
text-align: center;
color: ${({ theme }) => theme.COLORS.GRAY[800]};
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
font-size: ${({ theme }) => theme.FONT_SIZE["XL"]}px;
`

export const MainCardSummarySubTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE["SM"]}px;
`