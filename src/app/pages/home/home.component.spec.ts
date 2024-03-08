import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';


import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { RecipeOfTheDayComponent } from '../../components/recipe-of-the-day/recipe-of-the-day.component';
import { BrowseRecipeSectionComponent } from '../../components/browse-recipe-section/browse-recipe-section.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule, MatIconModule, RouterModule],
      declarations: [HomeComponent, BannerComponent, RecipeOfTheDayComponent, BrowseRecipeSectionComponent, AboutUsComponent],
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
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
