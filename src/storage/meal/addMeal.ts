import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeal } from "./getAllMeal";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "./mealStorageDTO";

export async function addMeal(newMeal: MealDTO) {
  try {
    const storedMeals = await getAllMeal()

    const dateAlreadyExists = storedMeals.filter(
      (meal) => meal.date === newMeal.date
    );

    const targetIndex = storedMeals.findIndex(
      (item) => item.date === newMeal.date
    );

    let storage;

    if (dateAlreadyExists.length > 0) {
      // @ts-ignore
      storedMeals[targetIndex].data.push(newMeal.data[0]);
      storage = JSON.stringify([...storedMeals]);
    } else {
      storage = JSON.stringify([...storedMeals, newMeal]);
    }

    await AsyncStorage.setItem(`${MEALS_COLLECTION}`, storage);

  } catch (error) {
    console.log(error)
    throw error
  }
}