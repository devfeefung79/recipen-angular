import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

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

  it('should render banner component', () => {
    const bannerElement = fixture.debugElement.query(By.css('app-banner'));
    expect(bannerElement).toBeTruthy();
  });

  it('should render recipe of the day component', () => {
    const recipeOfTheDayElement = fixture.debugElement.query(By.css('app-recipe-of-the-day'));
    expect(recipeOfTheDayElement).toBeTruthy();
  });

  it('should render browse recipe section component', () => {
    const browseRecipeSectionElement = fixture.debugElement.query(By.css('app-browse-recipe-section'));
    expect(browseRecipeSectionElement).toBeTruthy();  
  });

  it('should render about us component', () => {
    const aboutUsElement = fixture.debugElement.query(By.css('app-about-us'));
    expect(aboutUsElement).toBeTruthy();
  })

  it('should render footer correctly', () => {
    const footerElement = fixture.debugElement.query(By.css('div.footer'));
    expect(footerElement).toBeTruthy();
    expect(footerElement.nativeElement.textContent).toContain('© 2024 Recipen. All rights reserved.');
  })

});
