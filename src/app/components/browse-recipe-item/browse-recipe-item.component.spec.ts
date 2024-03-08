import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRecipeItemComponent } from './browse-recipe-item.component';

describe('BrowseRecipeItemComponent', () => {
  let component: BrowseRecipeItemComponent;
  let fixture: ComponentFixture<BrowseRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseRecipeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
