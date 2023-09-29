import styled from "styled-components/native";

export type ProgressTypeStyleProps = 'GOOD' | 'BAD'

type Props = {
  progressType: ProgressTypeStyleProps
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, progressType }) => progressType === 'GOOD' ? theme.COLORS.GREEN[100] : theme.COLORS.RED[100]};
`



