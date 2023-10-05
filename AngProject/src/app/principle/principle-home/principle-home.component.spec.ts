import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleHomeComponent } from './principle-home.component';

describe('PrincipleHomeComponent', () => {
  let component: PrincipleHomeComponent;
  let fixture: ComponentFixture<PrincipleHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipleHomeComponent]
    });
    fixture = TestBed.createComponent(PrincipleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
