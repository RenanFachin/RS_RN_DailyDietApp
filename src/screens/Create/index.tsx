import { Input } from "@components/Input";
import { Container, Content, Title, BackButton, BackIcon, CreateMain } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { TextArea } from "@components/TextArea";
import { View, Text, FlatList } from "react-native";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { Button } from "@components/Button";

export function Create() {
  const navigation = useNavigation()

  const [mealTitle, setMealTitle] = useState('')
  const [mealDescription, setMealDescriptio] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [isInDiet, setIsInDiet] = useState('')

  function handleGoBack() {
    navigation.goBack()
  }

  function handleAddNewMeal(){
    // Criando um objeto contendo todos os dados preenchidos pelo usuário
    const newMealData = {
      title: mealTitle,
      description: mealDescription,
      date: date,
      hour: hour,
      isInDiet: isInDiet
    }

    if(isInDiet){
      navigation.navigate('success')
    }
''
    console.log(newMealData)
  }


  return (
    <Container>
      <Content>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>

        <Title>
          Nova refeição
        </Title>
      </Content>

      <CreateMain>
        <Input
          onChangeText={setMealTitle}
          inputLabel="Nome"
          hasPlaceholder={true}
        />

        <TextArea
          TextAreaLabel="Descrição"
          onChangeText={setMealDescriptio}
        />


        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <Input
            style={{ minWidth: 153.5 }}
            inputLabel="Data"
            onChangeText={setDate}
          />
          <Input
            style={{ minWidth: 153.5 }}
            inputLabel="Hora"
            onChangeText={setHour}
          />
        </View>

        <Text>  Está dentro da dieta?</Text>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <FlatList
            data={['Sim', 'Não']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter
                title={item}
                isSelected={item === isInDiet}
                onPress={() => setIsInDiet(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal={true} // Alterando a direção da flatList
          />
        </View>


        <Button
          title="Cadastrar refeição"
          onPress={handleAddNewMeal}
        />

      </CreateMain>

    </Container >
  )
}