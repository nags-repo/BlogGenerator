import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPostGeneratorComponent } from './linkedin-post-generator.component';

describe('LinkedinPostGeneratorComponent', () => {
  let component: LinkedinPostGeneratorComponent;
  let fixture: ComponentFixture<LinkedinPostGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedinPostGeneratorComponent]
    });
    fixture = TestBed.createComponent(LinkedinPostGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
