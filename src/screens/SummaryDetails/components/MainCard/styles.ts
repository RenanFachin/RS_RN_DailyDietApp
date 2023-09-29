import styled from "styled-components/native";

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