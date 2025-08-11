import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { mockMeals } from '../../mock/data';
import { BrowseRecipeItemComponent } from './browse-recipe-item.component';

describe('BrowseRecipeItemComponent', () => {
  let component: BrowseRecipeItemComponent;
  let fixture: ComponentFixture<BrowseRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [BrowseRecipeItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseRecipeItemComponent);
    component = fixture.componentInstance;
    component.meals = mockMeals;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test if recipe card render
  it('should render each meal in a recipe card', () => {
    const compiled = fixture.nativeElement;
    const recipeCards = compiled.querySelectorAll('.recipe-card');
    expect(recipeCards.length).toBe(mockMeals.length);

    recipeCards.forEach((card: HTMLElement, index: number) => {
      expect(card.textContent).toContain(mockMeals[index].strMeal);
    });
  });

  // test if image render with correct src
  it('should render the correct image', () => {
    const compiled = fixture.nativeElement;
    const images = compiled.querySelectorAll('img');
    expect(images.length).toBe(mockMeals.length);
    expect(images[0].src).toContain(mockMeals[0].strMealThumb);
  });

  // test if recipe title is rendered in h2
  it('should display the correct title', () => {
    const compiled = fixture.nativeElement;
    const titles = compiled.querySelectorAll('h2');
    expect(titles.length).toBe(mockMeals.length);
    expect(titles[0].textContent).toContain(mockMeals[0].strMeal);
  });
});
