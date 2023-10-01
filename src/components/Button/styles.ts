import styled from "styled-components/native";
import { Plus } from 'phosphor-react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  buttonType: ButtonTypeStyleProps
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: ${({ theme, buttonType }) => buttonType === 'PRIMARY' ? theme.COLORS.GRAY[700] : theme.COLORS.GRAY[100]};

  border: 1px solid ${({ theme, buttonType }) => buttonType === 'SECONDARY' && theme.COLORS.GRAY[800]}

`

export const Title = styled.Text<Props>`
  color: ${({ theme, buttonType }) => buttonType === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY[800]};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  weight: "bold",
  color: theme.COLORS.WHITE
}))``