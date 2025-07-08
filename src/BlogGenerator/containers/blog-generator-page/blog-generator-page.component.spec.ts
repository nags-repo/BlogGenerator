import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGeneratorPageComponent } from './blog-generator-page.component';

describe('BlogGeneratorPageComponent', () => {
  let component: BlogGeneratorPageComponent;
  let fixture: ComponentFixture<BlogGeneratorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogGeneratorPageComponent]
    });
    fixture = TestBed.createComponent(BlogGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
