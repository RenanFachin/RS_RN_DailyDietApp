import { HeaderSummaryDetails, HeaderTitle, HeadeSubTitle, BackButton, BackIcon } from './styles'

interface HeaderProps {
  percentage: number
  handleGoBack: () => void
}

export function Header({ percentage, handleGoBack }: HeaderProps) {
  return (
    <HeaderSummaryDetails>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>


      <HeaderTitle>
        {percentage}%
      </HeaderTitle>

      <HeadeSubTitle>
        das refeições dentro da dieta
      </HeadeSubTitle>
    </HeaderSummaryDetails>
  )
}