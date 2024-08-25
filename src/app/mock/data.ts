import { Meal, Category, Tag, TagType, CategoryOption, CategoryList, AreaOption, AreaList } from '../model/meal';

export const mockMeals: Array<Meal> = [
    { idMeal: '1', strMeal: 'Meal 1', strMealThumb: 'image1.jpg', strCategory: 'Chicken', strArea: 'Indian' },
    { idMeal: '2', strMeal: 'Meal 2', strMealThumb: 'image2.jpg', strCategory: 'Pork', strArea: 'Chinese' },
    { idMeal: '3', strMeal: 'Meal 3', strMealThumb: 'image3.jpg', strCategory: 'Seafood', strArea: 'British' },
    { idMeal: '4', strMeal: 'Meal 4', strMealThumb: 'image4.jpg', strCategory: 'Dessert', strArea: 'Japanese' }
];

export const mockChickenMeals: Array<Meal> = [
    { idMeal: '1', strMeal: 'Meal 1', strMealThumb: 'image1.jpg', strCategory: 'Chicken', strArea: 'Indian' },
    { idMeal: '2', strMeal: 'Meal 2', strMealThumb: 'image2.jpg', strCategory: 'Chicken', strArea: 'Indian' },
    { idMeal: '3', strMeal: 'Meal 3', strMealThumb: 'image3.jpg', strCategory: 'Chicken', strArea: 'Indian' }
]

export const mockMeal: Meal = { 
    idMeal: '1', 
    strMeal: 'Meal 1', 
    strMealThumb: 'image1.jpg', 
    strCategory: 'Chicken', 
    strArea: 'Indian', 
    strInstructions: 'Instructions 1',
    strTags: "Pasta,Curry",
    strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
    strIngredient1: "penne rigate",
    strIngredient2: "olive oil",
    strIngredient3: "garlic",
    strIngredient4: "chopped tomatoes",
    strIngredient5: "red chile flakes",
    strIngredient6: "italian seasoning",
    strIngredient7: "basil",
    strIngredient8: "Parmigiano-Reggiano",
    strMeasure1: "1 pound",
    strMeasure2: "1/4 cup",
    strMeasure3: "3 cloves",
    strMeasure4: "1 tin ",
    strMeasure5: "1/2 teaspoon",
    strMeasure6: "1/2 teaspoon",
    strMeasure7: "6 leaves",
    strMeasure8: "spinkling",
};
export const mockTags: Array<Tag> = [
    { text: 'Chicken', type: TagType.Category }, 
    { text: 'Indian', type: TagType.Cuisine }, 
    { text: 'Pasta', type: TagType.Tag }, 
    { text: 'Curry', type: TagType.Tag },
];

export const mockTag: Tag = { text: 'Chicken', type: TagType.Category };

export const mockCategory: Category = {
    idCategory: '1',
    strCategory: 'Category 1',
    strCategoryThumb: 'image1.jpg',
    strCategoryDescription: 'Description 1'
};

export const mockCategories: Array<Category> = [
    { idCategory: '1', strCategory: 'Category 1', strCategoryThumb: 'image1.jpg', strCategoryDescription: 'Description 1' },
    { idCategory: '2', strCategory: 'Category 2', strCategoryThumb: 'image2.jpg', strCategoryDescription: 'Description 2' },
    { idCategory: '3', strCategory: 'Category 3', strCategoryThumb: 'image3.jpg', strCategoryDescription: 'Description 3' },
    { idCategory: '4', strCategory: 'Category 4', strCategoryThumb: 'image4.jpg', strCategoryDescription: 'Description 4' }
]

export const mockCategoryOption: CategoryOption = { strCategory: 'Category 1', imageUrl: 'image1.jpg' };

export const mockCategoryOptions: Array<CategoryOption> = [
    { strCategory: 'Category 1', imageUrl: 'image1.jpg' },
    { strCategory: 'Category 2', imageUrl: 'image2.jpg' },
    { strCategory: 'Category 3', imageUrl: 'image3.jpg' },
    { strCategory: 'Category 4', imageUrl: 'image4.jpg' }
]

export const mockCategoryOptionsLong: Array<CategoryOption> = [
    { strCategory: 'Category 1', imageUrl: 'image1.jpg' },
    { strCategory: 'Category 2', imageUrl: 'image2.jpg' },
    { strCategory: 'Category 3', imageUrl: 'image3.jpg' },
    { strCategory: 'Category 4', imageUrl: 'image4.jpg' },
    { strCategory: 'Category 5', imageUrl: 'image5.jpg' },
    { strCategory: 'Category 6', imageUrl: 'image6.jpg' },
    { strCategory: 'Category 7', imageUrl: 'image7.jpg' },
    { strCategory: 'Category 8', imageUrl: 'image8.jpg' },
    { strCategory: 'Category 9', imageUrl: 'image9.jpg' },
    { strCategory: 'Category 10', imageUrl: 'image10.jpg' },
    { strCategory: 'Category 11', imageUrl: 'image11.jpg' },
    { strCategory: 'Category 12', imageUrl: 'image12.jpg' },
]

export const mockCategoryList: CategoryList = { meals: mockCategoryOptions };

export const mockAreaOptions: Array<AreaOption> = [
    { strArea: 'Area 1', imageUrl: 'image1.jpg' },
    { strArea: 'Area 2', imageUrl: 'image2.jpg' },
    { strArea: 'Area 3', imageUrl: 'image3.jpg' },
    { strArea: 'Area 4', imageUrl: 'image4.jpg' }
]

export const mockAreaList: AreaList = { meals: mockAreaOptions };