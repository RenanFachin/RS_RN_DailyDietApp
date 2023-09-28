import { Container, Title, SubTitle, ExpandButton, ExpandIcon, ProgressTypeStyleProps } from './styles'

type ProgressProps = {
  percentage: number
  progressType?: ProgressTypeStyleProps
}

export function Progress({ percentage, progressType }: ProgressProps) {
  return (
    <Container progressType={progressType}>
      <Title>
        {percentage}%
      </Title>

      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>


      <ExpandButton>
        <ExpandIcon progressType={progressType}/>
      </ExpandButton>
    </Container>
  )
}