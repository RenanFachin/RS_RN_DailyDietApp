import styled from "styled-components/native";
import { View } from "react-native";

export type CardStatusTypeProps = {
  isInDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 16px 14px 12px;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[300]};

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  
  margin-bottom: 8px;
`

export const HourText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const Divider = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[300]};
  height: 100%;
`

export const Title = styled.Text`
  flex: 1 0 0;

  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  
`

export const StatusInDiet = styled(View)<CardStatusTypeProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;

  background-color: ${({theme, isInDiet}) => isInDiet ? theme.COLORS.GREEN[500] : theme.COLORS.RED[500]};
`