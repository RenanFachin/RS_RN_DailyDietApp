import { Container, Content, MealText, HeaderSectionList } from "./styles"
import { useState, useEffect, useCallback } from "react"
import { SectionList, View } from 'react-native'

import { Card } from "@components/Card"
import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { Progress } from "@components/Progress"
import { ProgressTypeStyleProps } from '@components/Progress/styles'
import { ListEmpty } from "@components/ListEmpty"

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getAllMeal } from "@storage/meal/getAllMeal"
import { MealDTO } from "@storage/meal/mealStorageDTO"


export function Summary() {
  const [mealsData, setMealsData] = useState<MealDTO[]>([])
  const [percentage, setPercentage] = useState(64.52)
  const [progressType, setProgressType] = useState<ProgressTypeStyleProps>('BAD')


  const navigation = useNavigation()

  function handleShowDetails() {
    navigation.navigate('summaryDetails', { percentage })
  }

  function handleCreateMeal() {
    navigation.navigate('create')
  }

  async function fetchMeal() {
    try {
      const data = await getAllMeal()

      const dataSortered = data.sort((a, b) => {
        // update string date in new Date to sort
        const datePartsA = a.date.split("/");
        const dateA = new Date(
          `${datePartsA[2]}-${datePartsA[1]}-${datePartsA[0]}`
        );

        const datePartsB = b.date.split("/");
        const dateB = new Date(
          `${datePartsB[2]}-${datePartsB[1]}-${datePartsB[0]}`
        );

        return dateB.getTime() - dateA.getTime();
      });

      setMealsData(dataSortered)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if (percentage > 50) {
      setProgressType('GOOD')
    }
  }, [percentage])

  useFocusEffect(
    useCallback(() => {
      // console.log("use Focus Effect executou")
      fetchMeal()
    }, []))


  return (
    <Container>
      <Header />

      <Content>
        <Progress
          percentage={percentage}
          progressType={progressType}
          handleShowDetails={handleShowDetails}
        />


        <MealText>
          Refeições
        </MealText>

        <Button
          title="Nova refeição"
          hasIcon={true}
          onPress={handleCreateMeal}
        />


        <SectionList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty message='Que tal Adicionar suas refeições?' />}
          sections={mealsData}
          keyExtractor={(item) => item.title}
          renderItem={({ item, section }) => (
            <Card
              hour={item.hour}
              title={item.title}
              isInDiet={item.isInDiet}
              onPress={() =>
                navigation.navigate('details', {
                  meal: item,
                  date: item.date,
                  title: item.title,
                  description: item.description,
                  hour: item.hour,
                  date: section.date,
                  isInDiet: !!item.isInDiet
                })
              }
            />
          )}
          renderSectionHeader={({ section }) => (
            <View style={{ marginTop: 32, marginBottom: 8 }}>
              <HeaderSectionList >{section.date}</HeaderSectionList>
            </View>
          )}
          contentContainerStyle={
            [
              { paddingBottom: 60 },
              // DATA.length === 0 && { flex: 1 }
            ]
          }
        />
      </Content>
    </Container>
  )
}