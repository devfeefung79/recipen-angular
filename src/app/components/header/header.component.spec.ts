import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatMenuModule,
        MatIconModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test if app title is rendered
  it('should render app title', () => {
    const compiled = fixture.nativeElement;
    const appTitle = compiled.querySelector('.app-title');
    expect(appTitle.textContent).toContain('Recipen');
  });

  // test if category button is rendered
  it('should render category button', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('.browse-option button');
    expect(buttons[0].textContent).toContain('Category');
  });

  // test if cuisine button is rendered
  it('should render cuisine button', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('.browse-option button');
    expect(buttons[1].textContent).toContain('Cuisine');
  });

  // test if search bar is rendered
  it('should render search bar', () => {
    const compiled = fixture.nativeElement;
    const searchBar = compiled.querySelector('.search-bar');
    expect(searchBar).not.toBeNull;
    expect(searchBar).toBeTruthy();

    const input = searchBar.querySelector('input');
    expect(input).not.toBeNull;
    expect(input).toBeTruthy();

    const searchIcon = searchBar.querySelector('mat-icon');
    expect(searchIcon).not.toBeNull;
    expect(searchIcon).toBeTruthy();
  });

  // test if search function is performed
  it('should perform search function', () => {
    const compiled = fixture.nativeElement;
    const searchBar = compiled.querySelector('.search-bar');
    const searchIcon = searchBar.querySelector('mat-icon');

    const performSearchSpy = spyOn(component, 'performSearch');
    searchIcon.click();
    fixture.detectChanges();
    expect(performSearchSpy).toHaveBeenCalledWith();
  });
});
