import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service';
import { AreaOption, CategoryOption } from '../../model/meal';

@Component({
  selector: 'app-browse-recipe-section',
  templateUrl: './browse-recipe-section.component.html',
  styleUrl: './browse-recipe-section.component.scss'
})
export class BrowseRecipeSectionComponent implements OnInit {
  currentPage: number = 1;
  currentSelection: string = 'category';
  categoryOptions: Array<CategoryOption> = [];
  cuisineOptions: Array<AreaOption> = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void { 
    this.mealService.getCategoryList().subscribe(response => {
      if (response && response.meals) {
        this.categoryOptions = response.meals;
        this.categoryOptions.forEach((option) =>  {
          option.imageUrl = `../../../assets/category/${option.strCategory}.jpg`;
        })
      }
    })
    this.mealService.getAreaList().subscribe(response => {
      if (response && response.meals) {
        this.cuisineOptions = response.meals;
        this.cuisineOptions = this.cuisineOptions.filter((option) => option.strArea !== 'Unknown');
        this.cuisineOptions.forEach((option) =>  {
          option.imageUrl = `../../../assets/area/${option.strArea}.jpg`;
        })
      }
    })
  }

  getDisplayCategoryOptions = (): Array<CategoryOption>=> {
    if (this.currentSelection === 'category' && this.categoryOptions.length !== 0) {
      const startPos = (this.currentPage-1)*6;
      const endPos = Math.min(this.currentPage*6, this.categoryOptions.length);
      return this.categoryOptions.slice(startPos, endPos);
    }
    return [];
  }

  getDisplayCuisineOptions = (): Array<AreaOption> => {
    if (this.currentSelection === 'cuisine' && this.cuisineOptions.length !== 0) {
      const startPos = (this.currentPage-1)*6;
      const endPos = Math.min(this.currentPage*6, this.cuisineOptions.length);
      return this.cuisineOptions.slice(startPos, endPos);
    }
    return [];
  }

  onClickBrowseOption = (selectedOption: string) => {
    this.currentSelection = selectedOption;
    this.currentPage = 1;
  }

  onArrowLeft = () => {
    const minPageNum = 1;
    if (this.currentPage > minPageNum) {
      this.currentPage--;
    }
  }

  onArrowRight = () => {
    let maxPageNum = -1;
    if (this.currentSelection === 'category') {
      maxPageNum = Math.ceil(this.categoryOptions.length/6);
    } else if (this.currentSelection === 'cuisine') {
      maxPageNum = Math.ceil(this.cuisineOptions.length/6);
    }
    if (this.currentPage < maxPageNum) {
      this.currentPage++;
    }
  }
}
