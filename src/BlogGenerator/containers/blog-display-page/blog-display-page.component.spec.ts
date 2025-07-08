import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDisplayPageComponent } from './blog-display-page.component';

describe('BlogDisplayPageComponent', () => {
  let component: BlogDisplayPageComponent;
  let fixture: ComponentFixture<BlogDisplayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDisplayPageComponent]
    });
    fixture = TestBed.createComponent(BlogDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
