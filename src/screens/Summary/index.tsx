import { Container, Content, MealText, HeaderSectionList } from "./styles"
import { useState, useEffect } from "react"
import { SectionList, View } from 'react-native'

import { Card } from "@components/Card"
import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { Progress } from "@components/Progress"
import { ProgressTypeStyleProps } from '@components/Progress/styles'
import { ListEmpty } from "@components/ListEmpty"

export function Summary() {
  const [percentage, setPercentage] = useState<number>(52)
  const [progressType, setProgressType] = useState<ProgressTypeStyleProps>('BAD')

  useEffect(() => {
    if (percentage > 50) {
      setProgressType('GOOD')
    }
  }, [percentage])

  const DATA = [
    {
      headerSectionList: '12.08.23',
      data: [{
        hour: "16:00",
        title: "Whey protein com leite",
        cardType: "WITHIN_DIET"
      }, {
        hour: "12:30",
        title: "Chocolate",
        cardType: "OFF_DIET"
      }, {
        hour: "09:30",
        title: "Vitamina de banana com abacate",
        cardType: "WITHIN_DIET"
      }],
    },
    {
      headerSectionList: '11.08.23',
      data: [{
        hour: "16:00",
        title: "Whey protein com leite",
        cardType: "WITHIN_DIET"
      }, {
        hour: "12:30",
        title: "Chocolate",
        cardType: "OFF_DIET"
      }, {
        hour: "09:30",
        title: "Vitamina de banana com abacate",
        cardType: "WITHIN_DIET"
      }],
    }
  ];


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


        <SectionList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty message='Que tal Adicionar suas refeições?' />}
          sections={DATA}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Card
              hour={item.hour}
              title={item.title}
              cardType={item.cardType}
            />
          )}
          renderSectionHeader={({ section: { headerSectionList } }) => (
            <View style={{ marginTop: 32, marginBottom: 8 }}>
              <HeaderSectionList >{headerSectionList}</HeaderSectionList>
            </View>
          )}
          contentContainerStyle={
            [
              { paddingBottom: 60 }, DATA.length === 0 && { flex: 1 }
            ]
          }
        />
      </Content>
    </Container>
  )
}