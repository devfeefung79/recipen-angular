import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MealService } from '../../meal.service';
import { Meal } from '../../model/meal';

@Component({
  selector: 'app-browse-category',
  templateUrl: './browse-category.component.html',
  styleUrl: './browse-category.component.scss',
})
export class BrowseCategoryComponent implements OnInit {
  browseCategory: string | null = '';
  meals: Array<Meal> = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.browseCategory = params.get('category');
          return this.browseCategory
            ? this.mealService.filterByCategory(this.browseCategory)
            : of({ meals: [] });
        })
      )
      .subscribe((response) => {
        this.meals = response?.meals || [];
      });
  }
}
