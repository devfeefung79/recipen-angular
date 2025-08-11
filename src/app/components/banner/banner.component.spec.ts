import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper title', () => {
    const titleElement = fixture.debugElement.query(By.css('span'));
    expect(titleElement.nativeElement.textContent).toBe(
      'Discover Delicious Recipes'
    );
  });

  it('should render correct message', () => {
    const messageElement = fixture.debugElement.query(By.css('p'));
    expect(messageElement.nativeElement.textContent).toBe(
      'Embark on a culinary journey through our collection of tantalizing dishes, crafted to delight your taste buds.'
    );
  });
});
