import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { RecipeOfTheDayComponent } from './recipe-of-the-day.component';
import { MatCardModule } from '@angular/material/card';

describe('RecipeOfTheDayComponent', () => {
  let component: RecipeOfTheDayComponent;
  let fixture: ComponentFixture<RecipeOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule, RouterModule],
      declarations: [RecipeOfTheDayComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => {
                  return null;
                },
              },
            },
          }
        },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
