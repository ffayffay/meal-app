export interface Recipe {
  nutrition: Nutrition;
  ingredients: [{}];
  instructions: [{}];
  times: Times;
  images: [""];
  name: string;
  description: string;
  servings: [""];
}

interface Nutrition {
  servingSize: string;
  calories: string;
  carbohydrateContent: string;
  proteinContent: string;
  fatContent: string
  sodiumContent: string;
  fiberContent: string;
}

interface Times {
  cook: string;
  prep: string;
  total: string;
}
