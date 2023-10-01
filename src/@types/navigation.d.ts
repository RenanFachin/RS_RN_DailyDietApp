import { MealDTO } from "@storage/meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      summaryDetails: {
        percentage: string
      };
      create: undefined;
      success: undefined;
      failed: undefined;
      details: {
        meal: any;
        title: string;
        description: string;
        date: string;
        hour: string;
        isInDiet: boolean
      }
    }
  }
}