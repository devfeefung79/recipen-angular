import { TestBed } from '@angular/core/testing';

import { MealService } from './meal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
