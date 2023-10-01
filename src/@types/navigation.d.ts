import { MealDTO } from "@storage/meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      summaryDetails: {
        percentage: number
      };
      create: undefined;
      success: undefined;
      failed: undefined;
      details: {
        meal: MealDTO;
        title: string;
        description: string;
        date: string;
        hour: string;
        isInDiet: boolean
      }
    }
  }
}