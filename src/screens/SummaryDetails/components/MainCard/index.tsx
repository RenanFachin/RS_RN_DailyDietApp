import { MainCardSummary, MainCardSummarySuccess, MainCardSummaryError, MainCardSummaryTitle, MainCardSummarySubTitle } from './styles'

export function MainCard() {
  return (
    <MainCardSummary>
      <MainCardSummarySuccess>
        <MainCardSummaryTitle>99</MainCardSummaryTitle>

        <MainCardSummarySubTitle>refeições dentro da dieta</MainCardSummarySubTitle>
      </MainCardSummarySuccess>

      <MainCardSummaryError>
        <MainCardSummaryTitle>10</MainCardSummaryTitle>

        <MainCardSummarySubTitle>refeições fora da dieta</MainCardSummarySubTitle>
      </MainCardSummaryError>
    </MainCardSummary>
  )
}