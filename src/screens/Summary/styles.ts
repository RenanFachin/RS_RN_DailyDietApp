import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: start;
  margin-top: 32px;
`

export const MealText = styled.Text`
  margin-top: 38px;
  margin-bottom: 8px;
  color: ${({theme}) => theme.COLORS.GRAY[800]};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`