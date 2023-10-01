import { ArrowLeft } from "phosphor-react-native";

type IsOnDietStyleProps = {
  iconColor: string
}

type ContainerStyleProps = {
  backgroundColor: string
}

import styled from "styled-components/native";

export const Container = styled.View<ContainerStyleProps>`
  flex: 1;

  background-color: ${({ backgroundColor }) => backgroundColor};
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
  flex: 1;
  text-align: center;
  
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const DetailsMain = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 38px 24px;

  gap: 24px;
`

export const MealTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const MealDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const DateAndHourTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const DateAndHourContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const IsOnDietContainer = styled.View`
  width: 144px;
  height: 34px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  border-radius: 12px;
`



export const IsOnDietIcon = styled.View<IsOnDietStyleProps>`
width: 8px;
height: 8px;
border-radius: 8px;
background-color: ${({iconColor}) => iconColor};
`

export const IsOnDietText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`