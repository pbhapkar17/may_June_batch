import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsuccessComponent } from './principalsuccess.component';

describe('PrincipalsuccessComponent', () => {
  let component: PrincipalsuccessComponent;
  let fixture: ComponentFixture<PrincipalsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalsuccessComponent]
    });
    fixture = TestBed.createComponent(PrincipalsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
