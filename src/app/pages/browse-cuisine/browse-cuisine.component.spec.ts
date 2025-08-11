import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { BrowseRecipeItemComponent } from '../../components/browse-recipe-item/browse-recipe-item.component';
import { BrowseCuisineComponent } from './browse-cuisine.component';

describe('BrowseCuisineComponent', () => {
  let component: BrowseCuisineComponent;
  let fixture: ComponentFixture<BrowseCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BrowseCuisineComponent, BrowseRecipeItemComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ cuisine: 'japanese' }) },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: test ngOnInit method

  // TODO: should render correct page title

  // TODO: should render nested component
});
