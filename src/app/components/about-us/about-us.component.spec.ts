import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toBe('About Us');
  });

  it('should render correct message', () => {
    const messageElement = fixture.debugElement.query(By.css('p'));
    expect(messageElement.nativeElement.textContent).toBe(
      'At Recipen, we believe that cooking should be enjoyable and accessible to everyone. That’s why we strive to provide easy-to-follow recipes, helpful cooking tips, and informative articles to enhance your culinary skills. Whether you’re a seasoned chef or a beginner cook, our goal is to empower you to create mouthwatering dishes that will impress your family and friends. Join us on this culinary journey and let’s explore the world of flavors together!'
    );
  });

  it('should render correct image', () => {
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
  });
});
