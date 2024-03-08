import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service';
import { Meal } from '../../model/meal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-cuisine',
  templateUrl: './browse-cuisine.component.html',
  styleUrl: './browse-cuisine.component.scss'
})
export class BrowseCuisineComponent implements OnInit {
  browseCuisine: string | null = '';
  meals: Array<Meal> = [];

  constructor(private route: ActivatedRoute, private mealService: MealService) {}

  ngOnInit(): void {
    this.browseCuisine = this.route.snapshot.paramMap.get('cuisine');

    if (this.browseCuisine) {
      this.mealService.filterByArea(this.browseCuisine).subscribe(response => {
        if (response && response.meals) {
          this.meals = response?.meals;
        }
      })
    }
  }
}
