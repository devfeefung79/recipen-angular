import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { RecipeComponent } from './recipe.component';
import { MatChipsModule } from '@angular/material/chips';
import { MealService } from '../../meal.service';
import { mockMeal, mockMeals } from '../../mock/data';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
  let mealService: MealService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatChipsModule, RouterModule],
      declarations: [RecipeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '52771' }) } }
        },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    mealService = TestBed.inject(MealService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: test ngOnInit method
  it('should fetch and assign recipe', () => {
    spyOn(mealService, 'getMealDetailsById').and.returnValue(of({ meals: [mockMeal] }));

    component.ngOnInit();
    expect(mealService.getMealDetailsById).toHaveBeenCalled();
    expect(component.meal).toEqual(mockMeal);
  })

  // TODO: should render correct tags

  // TODO: should render correct recipe title
  it('should render correct recipe title', () => {
    spyOn(mealService, 'getMealDetailsById').and.returnValue(of({ meals: [mockMeal] }));
    component.ngOnInit();
    fixture.detectChanges();

    const titleElements = fixture.debugElement.queryAll(By.css('.app-recipe-detail h2'));
    expect(titleElements).toBeTruthy();
    expect(titleElements.length).toBe(2);
    expect(titleElements[0].nativeElement.textContent).toContain(mockMeal.strMeal);
  })

  // TODO: should render correct recipe image

  // TODO: should render correct video tutorial if available

  // TODO: should render correct instructions
  
  // TODO: should render correct ingredients
});
