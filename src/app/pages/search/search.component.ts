import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../../meal.service';
import { Meal } from '../../model/meal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  keyword: string | null = null;
  meals: Array<Meal> = [];
  categoryCountList: Array<any> = [];
  cuisineCountList: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    // get the search keyword from url
    this.keyword = this.route.snapshot.paramMap.get('keyword');

    if (this.keyword) {
      this.mealService.searchMealByName(this.keyword).subscribe((response) => {
        if (response && response.meals) {
          this.meals = response?.meals;
          for (let i = 0; i < response?.meals?.length; i++) {
            const categoryExists = this.categoryCountList.some((obj) =>
              Object.values(obj).some(
                (value) => value === response.meals[i].strCategory
              )
            );
            if (!categoryExists) {
              this.categoryCountList.push({
                name: response.meals[i].strCategory,
                count: 1,
              });
            } else {
              const foundObject = this.categoryCountList.find(
                (obj) => obj.name === response.meals[i].strCategory
              );
              foundObject.count += 1;
            }

            const cuisineExists = this.cuisineCountList.some((obj) =>
              Object.values(obj).some(
                (value) => value === response.meals[i].strArea
              )
            );
            if (!cuisineExists) {
              this.cuisineCountList.push({
                name: response.meals[i].strArea,
                count: 1,
              });
            } else {
              const foundObject = this.cuisineCountList.find(
                (obj) => obj.name === response.meals[i].strArea
              );
              foundObject.count += 1;
            }
          }
        }
      });
    }
  }
}
