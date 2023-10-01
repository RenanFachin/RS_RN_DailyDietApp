import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 24px;
  justify-content: center;
  align-items: center;

  gap: 32px;
`
export const Content = styled.View`
  gap: 8px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED[800]};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Subtitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Highlight = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`


export const Image = styled.Image``