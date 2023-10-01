export type MealInfoTypes = {
  title: string;
  description: string;
  date: string;
  hour: string;
  isInDiet: boolean | null
}

export type MealDTO = {
  date: string;
  data: MealInfoTypes[];
};