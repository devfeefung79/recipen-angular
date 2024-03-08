import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowseCategoryComponent } from './pages/browse-category/browse-category.component';
import { BrowseCuisineComponent } from './pages/browse-cuisine/browse-cuisine.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'search/:keyword', component: SearchComponent},
  { path: 'browse/category/:category', component: BrowseCategoryComponent},
  { path: 'browse/cuisine/:cuisine', component: BrowseCuisineComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
