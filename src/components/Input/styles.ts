import styled from "styled-components/native";
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 48px;
  max-height: 48px;

  border: 1px solid ${({theme}) => theme.COLORS.GRAY[200]};
  border-radius: 6px;

  padding: 14px;
  color: ${({theme}) => theme.COLORS.GRAY[800]};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY[700]};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`