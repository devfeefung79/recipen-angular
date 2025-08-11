import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';
import { MealService } from '../../meal.service';
import {
  mockAreaList,
  mockAreaOptions,
  mockCategoryList,
  mockCategoryOptions,
  mockCategoryOptionsLong,
} from '../../mock/data';
import { BrowseRecipeSectionComponent } from './browse-recipe-section.component';

describe('BrowseRecipeSectionComponent', () => {
  let component: BrowseRecipeSectionComponent;
  let fixture: ComponentFixture<BrowseRecipeSectionComponent>;
  let mealService: MealService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule, RouterTestingModule],
      declarations: [BrowseRecipeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseRecipeSectionComponent);
    component = fixture.componentInstance;
    mealService = TestBed.inject(MealService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and assign category and cuisine lists', () => {
    spyOn(mealService, 'getCategoryList').and.returnValue(of(mockCategoryList));
    spyOn(mealService, 'getAreaList').and.returnValue(of(mockAreaList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.categoryOptions).toEqual(mockCategoryOptions);
    expect(component.cuisineOptions).toEqual(mockAreaOptions);
  });

  it('should return display category options', () => {
    // set up initial component variables
    component.categoryOptions = mockCategoryOptions;
    component.currentSelection = 'category';
    component.currentPage = 1;

    const displayResult = component.getDisplayCategoryOptions();
    fixture.detectChanges();

    expect(displayResult).toEqual(mockCategoryOptions);
  });

  it('should return display cuisine options', () => {
    // set up initial component variables
    component.cuisineOptions = mockAreaOptions;
    component.currentSelection = 'cuisine';
    component.currentPage = 1;

    const displayResult = component.getDisplayCuisineOptions();
    fixture.detectChanges();

    expect(displayResult).toEqual(mockAreaOptions);
  });

  it('should update the current selection when category is clicked', () => {
    component.onClickBrowseOption('category');
    fixture.detectChanges();

    expect(component.currentSelection).toBe('category');
    expect(component.currentPage).toBe(1);
  });

  it('should update the current selection when cuisine is clicked', () => {
    component.onClickBrowseOption('cuisine');
    fixture.detectChanges();

    expect(component.currentSelection).toBe('cuisine');
    expect(component.currentPage).toBe(1);
  });

  it('should update the current page when left arrow is clicked', () => {
    component.currentPage = 2;

    component.onArrowLeft();
    fixture.detectChanges();

    expect(component.currentPage).toBe(1);
  });

  it('should not update the current page clicking left when on the first page', () => {
    component.currentPage = 1;

    component.onArrowLeft();
    fixture.detectChanges();

    expect(component.currentPage).toBe(1);
  });

  it('should update the current page when right arrow is clicked', () => {
    // set up initial component variables
    component.categoryOptions = mockCategoryOptionsLong;
    component.currentSelection = 'category';
    component.currentPage = 1;

    component.onArrowRight();
    fixture.detectChanges();

    expect(component.currentPage).toBe(2);
  });

  it('should not update the current page clicking right when on the last page', () => {
    // set up initial component variables
    component.categoryOptions = mockCategoryOptionsLong;
    component.currentSelection = 'category';
    component.currentPage = 2;

    component.onArrowRight();
    fixture.detectChanges();

    expect(component.currentPage).toBe(2);
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h1');
    expect(title.textContent).toContain('Browse Recipes');
  });

  it('should render the category and cuisine buttons', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('.browse-option button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toContain('Category');
    expect(buttons[1].textContent).toContain('Cuisine');
  });

  it('should call the correct function when the category button is clicked', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('button');

    spyOn(component, 'onClickBrowseOption');

    buttons[0].click();
    expect(component.onClickBrowseOption).toHaveBeenCalled();
  });

  it('should call the correct function when the cuisine button is clicked', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('button');

    spyOn(component, 'onClickBrowseOption');

    buttons[1].click();
    expect(component.onClickBrowseOption).toHaveBeenCalled();
  });

  it('should render the arrow left amd the arrow right icon', () => {
    const compiled = fixture.nativeElement;
    const icons = compiled.querySelectorAll(
      '.browse-option-scroll-container mat-icon'
    );
    expect(icons.length).toBe(2);
  });

  it('should call the correct function when the arrow left icon is clicked', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll(
      '.browse-option-scroll-container button'
    );

    spyOn(component, 'onArrowLeft');

    buttons[0].click();
    expect(component.onArrowLeft).toHaveBeenCalled();
  });

  it('should call the correct function when the arrow right icon is clicked', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll(
      '.browse-option-scroll-container button'
    );

    spyOn(component, 'onArrowRight');

    buttons[1].click();
    expect(component.onArrowRight).toHaveBeenCalled();
  });
});
