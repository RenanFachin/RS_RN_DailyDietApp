import { Header } from "@components/Header"
import { Container, Content } from "./styles"
import { Progress } from "@components/Progress"
import { useState, useEffect } from "react"
import { ProgressTypeStyleProps } from '@components/Progress/styles'

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
      </Content>
    </Container>
  )
}