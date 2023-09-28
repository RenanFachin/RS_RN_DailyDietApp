import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

export type ProgressTypeStyleProps = 'GOOD' | 'BAD'

type Props = {
  progressType: ProgressTypeStyleProps
}

export const Container = styled.View <Props>`
  width: 100%;
  padding: 20px 16px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${({ theme, progressType }) => progressType === 'GOOD' ? theme.COLORS.GREEN[100] : theme.COLORS.RED[100]};

  position: relative;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[800]};
  font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const ExpandButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 8px;
  right: 8px;
`

export const ExpandIcon = styled(ArrowUpRight).attrs<Props>(({ theme, progressType }) => ({
  size: 24,
  color: progressType === 'GOOD' ? theme.COLORS.GREEN[800] : theme.COLORS.RED[800]
  // color: theme.COLORS.GREEN[800]
}))``