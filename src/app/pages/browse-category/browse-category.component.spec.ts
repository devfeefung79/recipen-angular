import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { BrowseCategoryComponent } from './browse-category.component';
import { BrowseRecipeItemComponent } from '../../components/browse-recipe-item/browse-recipe-item.component';

describe('BrowseCategoryComponent', () => {
  let component: BrowseCategoryComponent;
  let fixture: ComponentFixture<BrowseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BrowseCategoryComponent, BrowseRecipeItemComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ category: 'beef' }) } }
        },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseCategoryComponent);
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
