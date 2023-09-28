import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`
