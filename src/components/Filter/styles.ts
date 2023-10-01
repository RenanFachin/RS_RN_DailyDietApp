import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isSelected?: boolean
}


export const Container = styled(TouchableOpacity) <FilterStyleProps>`
  flex-direction: row;
  gap: 8px;

  height: 50px;

  min-width: 161.5px;
  max-width: 161.5px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY[300]};

  ${({ theme, isSelected }) => isSelected && css`
    border: 1px solid ${theme.COLORS.GRAY[800]};
  `};

  
  margin-right: 20px;
`

export const CircleStatus = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
`