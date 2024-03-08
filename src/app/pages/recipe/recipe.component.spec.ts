import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';

import { RecipeComponent } from './recipe.component';
import { MatChipsModule } from '@angular/material/chips';


describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
