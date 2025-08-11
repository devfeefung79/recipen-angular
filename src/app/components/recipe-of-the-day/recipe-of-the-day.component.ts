import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../../meal.service';
import { Meal, Tag, TagType } from '../../model/meal';

@Component({
  selector: 'app-recipe-of-the-day',
  templateUrl: './recipe-of-the-day.component.html',
  styleUrl: './recipe-of-the-day.component.scss',
})
export class RecipeOfTheDayComponent implements OnInit {
  meal: Meal | null = null;
  tags: Array<Tag> = [];

  constructor(
    private router: Router,
    private location: Location,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.mealService.getRandomMeal().subscribe((response) => {
      if (response && response.meals && response.meals.length === 1) {
        this.meal = response?.meals[0];
        this.tags.push({
          text: response?.meals[0]?.strCategory,
          type: TagType.Category,
        });
        this.tags.push({
          text: response?.meals[0]?.strArea,
          type: TagType.Cuisine,
        });
        const tagList = response?.meals[0]?.strTags?.split(',');
        tagList?.forEach((tag) => {
          const isUnique = !this.tags.some(
            (existingTag) =>
              existingTag.text === tag && existingTag.type === tag
          );
          const isValid = tag !== 'Unknown' && tag !== '';

          if (isUnique && isValid) {
            this.tags.push({ text: tag, type: TagType.Tag });
          }
        });
      }
    });
  }

  browseRecipeItem(tag: Tag): void {
    switch (tag.type) {
      case TagType.Category:
        this.router.navigate(['/browse/category', tag.text]);
        this.location.replaceState(`/browse/category/${tag.text}`);
        window.location.reload();
        break;
      case TagType.Cuisine:
        this.router.navigate(['/browse/cuisine', tag.text]);
        this.location.replaceState(`/browse/cuisine/${tag.text}`);
        window.location.reload();
        break;
      default:
        break;
    }
  }
}
