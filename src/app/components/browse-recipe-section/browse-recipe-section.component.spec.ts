import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowseRecipeSectionComponent } from './browse-recipe-section.component';
import { MatIconModule } from '@angular/material/icon';

describe('BrowseRecipeSectionComponent', () => {
  let component: BrowseRecipeSectionComponent;
  let fixture: ComponentFixture<BrowseRecipeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule],
      declarations: [BrowseRecipeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseRecipeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
