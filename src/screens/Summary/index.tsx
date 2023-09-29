import { Header } from "@components/Header"
import { Container, Content, MealText } from "./styles"
import { Progress } from "@components/Progress"
import { useState, useEffect } from "react"
import { ProgressTypeStyleProps } from '@components/Progress/styles'
import { Button } from "@components/Button"
import { Card } from "@components/Card"

export function Summary() {
  const [percentage, setPercentage] = useState<number>(52)
  const [progressType, setProgressType] = useState<ProgressTypeStyleProps>('BAD')

  useEffect(() => {
    if (percentage > 50) {
      setProgressType('GOOD')
    }
  }, [percentage])


  return (
    <Container>
      <Header />

      <Content>
        <Progress
          percentage={percentage}
          progressType={progressType}
        />


        <MealText>
          Refeições
        </MealText>

        <Button title="Nova refeição" hasIcon={true} />



        <Card hour="16:00" title="Whey protein com leite" cardType="WITHIN_DIET" />
        <Card hour="12:30" title="Chocolate" cardType="OFF_DIET" />
        <Card hour="09:30" title="Vitamina de banana com abacate" cardType="WITHIN_DIET" />
      </Content>
    </Container>
  )
}