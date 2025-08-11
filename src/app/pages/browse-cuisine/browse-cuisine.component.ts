import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MealService } from '../../meal.service';
import { Meal } from '../../model/meal';

@Component({
  selector: 'app-browse-cuisine',
  templateUrl: './browse-cuisine.component.html',
  styleUrl: './browse-cuisine.component.scss',
})
export class BrowseCuisineComponent implements OnInit {
  browseCuisine: string | null = '';
  meals: Array<Meal> = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.browseCuisine = params.get('cuisine');
          return this.browseCuisine
            ? this.mealService.filterByArea(this.browseCuisine)
            : of({ meals: [] });
        })
      )
      .subscribe((response) => {
        this.meals = response?.meals || [];
      });
  }
}
