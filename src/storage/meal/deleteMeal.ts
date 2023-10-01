import { MealInfoTypes } from "./mealStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeal } from "./getAllMeal";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function deleteMeal(deletedMeal: MealInfoTypes){
  try {
    const storedMeals = await getAllMeal();

    const newStorage = storedMeals.map((storedMeal) => {
      const filteredData = storedMeal.data.filter(
        (meal) => JSON.stringify(meal) !== JSON.stringify(deletedMeal)
      );

      return { ...storedMeal, data: filteredData };
    });

    const hasMealVerify = newStorage.filter((item) => item.data.length > 0);

    const storage = await AsyncStorage.setItem(
      `${MEALS_COLLECTION}`,
      JSON.stringify(hasMealVerify)
    );

    return storage;

  } catch (error) {
    throw error
  }
}