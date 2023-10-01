import { Input } from "@components/Input";
import { Container, Content, Title, BackButton, BackIcon, CreateMain, RowContainer } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { TextArea } from "@components/TextArea";
import { Keyboard, View, Text, Alert } from "react-native";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { Button } from "@components/Button";
import { addMeal } from "@storage/meal/addMeal";

export function Create() {
  const [yesButtonChecked, setYesButtonChecked] = useState(false);
  const [noButtonChecked, setNoButtonChecked] = useState(false);


  const navigation = useNavigation()

  const [mealTitle, setMealTitle] = useState('')
  const [mealDescription, setMealDescriptio] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null)

  function handleGoBack() {
    navigation.goBack()
  }

  function handlePressYes() {
    setYesButtonChecked(yesButtonChecked ? false : true);
    setNoButtonChecked(false);

    setIsInDiet((prevState) => (!prevState ? true : null));
    Keyboard.dismiss();
  };

  function handlePressNo() {
    setNoButtonChecked(noButtonChecked ? false : true);
    setYesButtonChecked(false);

    setIsInDiet((prevState) => (prevState === false ? null : false));
    Keyboard.dismiss();
  };

  function verifyInput(mealTitle: string, mealDescription: string, date: string, hour: string) {
    if (mealTitle.trim().length === 0) {
      return 'Você deve adicionar algo ao nome da refeição.';
    }

    if (mealDescription.trim().length === 0) {
      return 'Você deve adicionar uma descrição.';
    }

    if (date.trim().length === 0 || hour.trim().length === 0) {
      return 'Você deve adicionar uma data e hora.';
    }

    return null;
  }


  async function handleAddNewMeal() {

    try {
      const validationMessage = verifyInput(mealTitle, mealDescription, date, hour)

      if (validationMessage) {
        return Alert.alert('Nova refeição', validationMessage);
      }

      if (mealTitle.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Você deve adicionar algo ao nome da refeição.')
      }

      if (mealDescription.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Você deve adicionar uma descrição')
      }

      if (date.trim().length === 0 || hour.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Você deve adicionar uma data e hora')
      }

      // Criando um objeto contendo todos os dados preenchidos pelo usuário
      const newMealData = {
        date,
        data: [{
          title: mealTitle,
          description: mealDescription,
          date: date,
          hour: hour,
          isInDiet: isInDiet
        }
        ]
      }

      console.log(isInDiet)

      await addMeal(newMealData)

      if (isInDiet) {
        navigation.navigate('success')
      } else {
        navigation.navigate('failed')
      }
    } catch (error) {
      Alert.alert('Nova refeição', 'Não foi possível adicionar uma nova refeição.')
      console.log(error)
    }



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

        <RowContainer>
          <Filter
            textButton="Sim"
            isChecked={yesButtonChecked}
            onPress={handlePressYes}
          />
          <Filter
            textButton="Não"
            isChecked={noButtonChecked}
            onPress={handlePressNo}
          />
        </RowContainer>


        <Button
          title="Cadastrar refeição"
          onPress={handleAddNewMeal}
        />

      </CreateMain>

    </Container >
  )
}