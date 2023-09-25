import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircleComponent } from './add-circle.component';

describe('AddCircleComponent', () => {
  let component: AddCircleComponent;
  let fixture: ComponentFixture<AddCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCircleComponent]
    });
    fixture = TestBed.createComponent(AddCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
