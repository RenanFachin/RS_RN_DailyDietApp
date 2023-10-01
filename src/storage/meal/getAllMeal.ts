import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '@storage/storageConfig'
import { MealDTO } from "./mealStorageDTO";

export async function getAllMeal() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}