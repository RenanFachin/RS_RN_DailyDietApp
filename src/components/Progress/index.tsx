import { Container, Title, SubTitle, ExpandButton, ExpandIcon, ProgressTypeStyleProps } from './styles'

type ProgressProps = {
  percentage: string
  progressType?: ProgressTypeStyleProps
  handleShowDetails: () => void;
}

export function Progress({ percentage, progressType, handleShowDetails }: ProgressProps) {

  return (
    <Container progressType={progressType}>
      <Title>
        {percentage}%
      </Title>

      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>


      <ExpandButton onPress={handleShowDetails}>
        <ExpandIcon progressType={progressType} />
      </ExpandButton>
    </Container>
  )
}