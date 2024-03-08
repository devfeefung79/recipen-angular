import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service';
import { Meal } from '../../model/meal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-category',
  templateUrl: './browse-category.component.html',
  styleUrl: './browse-category.component.scss'
})
export class BrowseCategoryComponent implements OnInit {
  browseCategory: string | null = '';
  meals: Array<Meal> = [];
  
  constructor(private route: ActivatedRoute, private mealService: MealService) {}

  ngOnInit(): void {
    this.browseCategory = this.route.snapshot.paramMap.get('category');

    if (this.browseCategory) {
      this.mealService.filterByCategory(this.browseCategory).subscribe(response => {
        if (response && response.meals) {
          this.meals = response?.meals;
        }
      })
    }
  }

}
