import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MealService } from '../../meal.service';
import { mockMeal, mockTags } from '../../mock/data';
import { RecipeComponent } from '../../pages/recipe/recipe.component';
import { RecipeOfTheDayComponent } from './recipe-of-the-day.component';

describe('RecipeOfTheDayComponent', () => {
  let component: RecipeOfTheDayComponent;
  let fixture: ComponentFixture<RecipeOfTheDayComponent>;
  let mealService: MealService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatChipsModule,
        RouterTestingModule.withRoutes([
          { path: 'recipe/:id', component: RecipeComponent },
        ]),
      ],
      declarations: [RecipeOfTheDayComponent, RecipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeOfTheDayComponent);
    component = fixture.componentInstance;
    mealService = TestBed.inject(MealService);
    router = TestBed.inject(Router);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and assign meal', () => {
    spyOn(mealService, 'getRandomMeal').and.returnValue(
      of({ meals: [mockMeal] })
    );

    component.ngOnInit();
    expect(mealService.getRandomMeal).toHaveBeenCalled();
    expect(component.meal).toEqual(mockMeal);
    expect(component.tags.length).toBe(4);
    expect(component.tags).toEqual(mockTags);
  });

  it('should navigate to recipe', async () => {
    spyOn(mealService, 'getRandomMeal').and.returnValue(
      of({ meals: [mockMeal] })
    );
    component.ngOnInit();
    fixture.detectChanges();

    const cardContentElement = fixture.debugElement.query(
      By.css('mat-card-content')
    );
    await cardContentElement.nativeElement.click();
    fixture.detectChanges();

    expect(router.url).toBe(`/recipe/${mockMeal.idMeal}`);
  });

  it('should render title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toContain(
      'Recipe of the Day'
    );
  });

  it('should render card', () => {
    const cardElement = fixture.debugElement.query(By.css('mat-card'));
    expect(cardElement).toBeTruthy();
  });

  it('should render tags', () => {
    spyOn(mealService, 'getRandomMeal').and.returnValue(
      of({ meals: [mockMeal] })
    );
    component.ngOnInit();
    fixture.detectChanges();

    const tagElements = fixture.debugElement.queryAll(
      By.css('div.tags-container mat-chip')
    );
    expect(tagElements).toBeTruthy();
    expect(tagElements.length).toBe(4);
  });

  it('should render card content', () => {
    spyOn(mealService, 'getRandomMeal').and.returnValue(
      of({ meals: [mockMeal] })
    );
    component.ngOnInit();
    fixture.detectChanges();

    const cardContentElement = fixture.debugElement.query(
      By.css('mat-card-content')
    );
    expect(cardContentElement).toBeTruthy();

    const recipeDataTitleElement = fixture.debugElement.query(
      By.css('div.recipe-data h2')
    );
    expect(recipeDataTitleElement.nativeElement.textContent).toContain(
      mockMeal.strMeal
    );

    const recipeDataParagraphElement = fixture.debugElement.query(
      By.css('div.recipe-data p')
    );
    expect(recipeDataParagraphElement.nativeElement.textContent).toContain(
      mockMeal.strInstructions
    );
  });
});
