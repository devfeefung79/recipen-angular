import { TestBed } from '@angular/core/testing';

import { MealService } from './meal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockAreaOptions, mockCategories, mockCategoryOptions, mockChickenMeals, mockMeal, mockMeals } from './mock/data';

describe('MealService', () => {
  let service: MealService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MealService],
    });
    service = TestBed.inject(MealService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should retrieve all meal categories', () => {

    const mockCategoriesResponse = { categories: mockCategories };

    // Make the HTTP request
    service.getAllMealCategories().subscribe(data => {
      expect(data).toEqual(mockCategoriesResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/categories.php`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockCategoriesResponse);
  });

  it('should retrieve a list of categories', () => {
    const mockCategoryListResponse = { meals: mockCategoryOptions };

    // Make the HTTP request
    service.getCategoryList().subscribe(data => {
      expect(data).toEqual(mockCategoryListResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/list.php?c=list`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockCategoryListResponse);
  })

  it('should retrieve a list of areas', () => {
    const mockAreaListResponse = { meals: mockAreaOptions };

    // Make the HTTP request
    service.getAreaList().subscribe(data => {
      expect(data).toEqual(mockAreaListResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/list.php?a=list`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockAreaListResponse);
  })

  it('should retrieve meals with filter by main ingredient', () => {
    const mockMealsResponse = { meals: mockChickenMeals };
    const searchIngredient = 'chicken';

    // Make the HTTP request
    service.filterByMainIngredient(searchIngredient).subscribe(data => {
      expect(data).toEqual(mockMealsResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/filter.php?i=${searchIngredient}`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMealsResponse);
  })

  it('should retrieve meals with filter by category', () => {
    const mockMealsResponse = { meals: mockChickenMeals };
    const searchCategory = 'chicken';

    // Make the HTTP request
    service.filterByCategory(searchCategory).subscribe(data => {
      expect(data).toEqual(mockMealsResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/filter.php?c=${searchCategory}`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMealsResponse);
  })

  it('should retrieve meals with filter by area', () => {
    const mockMealsResponse = { meals: mockChickenMeals };
    const searchArea = 'Japanese';

    // Make the HTTP request
    service.filterByArea(searchArea).subscribe(data => {
      expect(data).toEqual(mockMealsResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/filter.php?a=${searchArea}`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMealsResponse);
  })

  it('should retrieve a random meal', () => {
    const mockRandomMealResponse = { meals: [mockMeal] };

    // Make the HTTP request
    service.getRandomMeal().subscribe(data => {
      expect(data).toEqual(mockRandomMealResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/random.php`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockRandomMealResponse);
  })
  
  it('should retrieve a meal by name', () => {
    const mockMealResponse = { meals: [mockMeal] };

    // Make the HTTP request
    service.searchMealByName('sea').subscribe(data => {
      expect(data).toEqual(mockMealResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/search.php?s=sea`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMealResponse);
  })

  it('should retrieve a meal by id', () => {
    const mockMealResponse = { meals: [mockMeal] };

    // Make the HTTP request
    service.getMealDetailsById('1').subscribe(data => {
      expect(data).toEqual(mockMealResponse);
    });

    // Expect a single request to the URL
    const req = httpTestingController.expectOne(`${service.baseUrl}/lookup.php?i=1`);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMealResponse);
  })

});
