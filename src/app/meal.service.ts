import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaList, Categories, CategoryList, Meals } from '../app/model/meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  /* This project uses free APIs from TheMealDB
   * See the website for more details */
  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  public getAllMealCategories = (): Observable<Categories> => {
    const url = `${this.baseUrl}/categories.php`;
    return this.http.get<Categories>(url);
  };

  public getCategoryList = (): Observable<CategoryList> => {
    const url = `${this.baseUrl}/list.php?c=list`;
    return this.http.get<CategoryList>(url);
  };

  public getAreaList = (): Observable<AreaList> => {
    const url = `${this.baseUrl}/list.php?a=list`;
    return this.http.get<AreaList>(url);
  };

  public filterByMainIngredient = (ingredient: string): Observable<Meals> => {
    const url = `${this.baseUrl}/filter.php?i=${ingredient}`;
    return this.http.get<Meals>(url);
  };

  public filterByCategory = (category: string): Observable<Meals> => {
    const url = `${this.baseUrl}/filter.php?c=${category}`;
    return this.http.get<Meals>(url);
  };

  public filterByArea = (area: string): Observable<Meals> => {
    const url = `${this.baseUrl}/filter.php?a=${area}`;
    return this.http.get<Meals>(url);
  };

  public getRandomMeal = (): Observable<Meals> => {
    const url = `${this.baseUrl}/random.php`;
    return this.http.get<Meals>(url);
  };

  public searchMealByName = (name: string): Observable<Meals> => {
    const url = `${this.baseUrl}/search.php?s=${name}`;
    return this.http.get<Meals>(url);
  };

  public getMealDetailsById = (id: string): Observable<Meals> => {
    const url = `${this.baseUrl}/lookup.php?i=${id}`;
    return this.http.get<Meals>(url);
  };
}
