import { MealDTO, MealInfoTypes } from '@storage/meal/mealStorageDTO';
import { BackButton, BackIcon, Container, Content, Title, DetailsMain, MealTitle, MealDescription, DateAndHourTitle, DateAndHourContent, IsOnDietContainer, IsOnDietIcon, IsOnDietText } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Button } from '@components/Button';
import { deleteMeal } from '@storage/meal/deleteMeal';

type RouteParams = {
  meal: any;
  title: string;
  description: string;
  date: string;
  hour: string;
  isInDiet: boolean
};



export function Details() {
  const { COLORS } = useTheme()
  const { params } = useRoute()

  const { meal, title, description, date, hour, isInDiet } = params as RouteParams

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleDeleteMeal(){
    await deleteMeal(meal)

    navigation.navigate('home')
  }


  return (
    <Container backgroundColor={isInDiet ? COLORS.GREEN[500] : COLORS.RED[500]} >
      <Content>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>

        <Title>
          Refeição
        </Title>
      </Content>

      <DetailsMain>
        <View style={{ gap: 8 }}>
          <MealTitle>{title}</MealTitle>

          <MealDescription>
            {description}
          </MealDescription>
        </View>

        <View style={{ gap: 8 }}>
          <DateAndHourTitle>
            Data e hora
          </DateAndHourTitle>

          <DateAndHourContent>
            {`${date} às ${hour}`}
          </DateAndHourContent>
        </View>

        <IsOnDietContainer>
          <IsOnDietIcon iconColor={isInDiet ? COLORS.GREEN[800] : COLORS.RED[800]} />

          <IsOnDietText>
            {isInDiet ? 'Dentro da dieta' : 'Fora da dieta'}
          </IsOnDietText>
        </IsOnDietContainer>

        <View style={{ flex: 1, justifyContent: 'flex-end', gap: 24 }}>
          <Button title='Editar refeição' />
          <Button title='Excluir refeição' buttonType='SECONDARY' onPress={handleDeleteMeal}/>
        </View>

      </DetailsMain>


    </Container>
  )
}