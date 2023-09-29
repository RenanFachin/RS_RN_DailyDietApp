import styled from "styled-components/native";

export const Container = styled.View`
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

export const MainCardContainer = styled.View`
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