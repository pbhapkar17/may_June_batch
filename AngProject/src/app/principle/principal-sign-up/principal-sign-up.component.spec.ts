import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSignUpComponent } from './principal-sign-up.component';

describe('PrincipalSignUpComponent', () => {
  let component: PrincipalSignUpComponent;
  let fixture: ComponentFixture<PrincipalSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalSignUpComponent]
    });
    fixture = TestBed.createComponent(PrincipalSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
