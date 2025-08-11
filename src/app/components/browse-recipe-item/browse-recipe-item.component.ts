import { Component, Input } from '@angular/core';
import { Meal } from '../../model/meal';

@Component({
  selector: 'app-browse-recipe-item',
  templateUrl: './browse-recipe-item.component.html',
  styleUrl: './browse-recipe-item.component.scss',
})
export class BrowseRecipeItemComponent {
  @Input() meals: Array<Meal> = [];
}
