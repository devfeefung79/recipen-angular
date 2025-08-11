import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowseRecipeSectionComponent } from './components/browse-recipe-section/browse-recipe-section.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeOfTheDayComponent } from './components/recipe-of-the-day/recipe-of-the-day.component';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { BrowseRecipeItemComponent } from './components/browse-recipe-item/browse-recipe-item.component';
import { BrowseCategoryComponent } from './pages/browse-category/browse-category.component';
import { BrowseCuisineComponent } from './pages/browse-cuisine/browse-cuisine.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeOfTheDayComponent,
    BrowseRecipeSectionComponent,
    AboutUsComponent,
    BannerComponent,
    HomeComponent,
    RecipeComponent,
    SearchComponent,
    BrowseCategoryComponent,
    BrowseCuisineComponent,
    BrowseRecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
