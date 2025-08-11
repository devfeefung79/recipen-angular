import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../../meal.service';
import { AreaOption, CategoryOption } from '../../model/meal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  categoryOptions: Array<CategoryOption> = [];
  cuisineOptions: Array<AreaOption> = [];

  constructor(
    private router: Router,
    private location: Location,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.mealService.getCategoryList().subscribe((response) => {
      if (response && response.meals) {
        this.categoryOptions = response.meals;
      }
    });
    this.mealService.getAreaList().subscribe((response) => {
      if (response && response.meals) {
        this.cuisineOptions = response.meals;
        this.cuisineOptions = this.cuisineOptions.filter(
          (option) => option.strArea !== 'Unknown'
        );
      }
    });
  }

  performSearch() {
    if (this.searchTerm.trim() !== '') {
      this.router.navigate(['/search', this.searchTerm]);
      this.location.replaceState(`/search/${this.searchTerm}`);
      window.location.reload();
    }
  }
}
