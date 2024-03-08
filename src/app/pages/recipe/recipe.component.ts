import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MealService } from '../../meal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
  id: string | null = null;
  meal: any = null;
  ingredientArray: Array<string> = [];

  constructor(private route: ActivatedRoute, private mealService: MealService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    // get the recipe id from url
    this.id = this.route.snapshot.paramMap.get('id');

    // get meal details with the id given
    if (this.id) {
      this.mealService.getMealDetailsById(this.id).subscribe(response => {
        if (response && response.meals && response.meals.length > 0) {
          this.meal = response?.meals[0];

          for (let i=1; i<=20; i++) {
            const concatIngredient = this.meal[`strIngredient${i}`] && this.meal[`strMeasure${i}`] ? this.meal[`strIngredient${i}`] + ' ' + this.meal[`strMeasure${i}`] : '';
            if (concatIngredient.trim() !== '') {
              this.ingredientArray.push(concatIngredient);
            }
          }
        }
      })
    }
  }

  getSafeVideoUrl(youtubeUrl: string): any {
    const videoIdMatch = youtubeUrl.match(/[?&]v=([^&]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      const url = `https://www.youtube.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return null;
  }
}
