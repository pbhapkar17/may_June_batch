import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSigUpComponent } from './owner-sig-up.component';

describe('OwnerSigUpComponent', () => {
  let component: OwnerSigUpComponent;
  let fixture: ComponentFixture<OwnerSigUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSigUpComponent]
    });
    fixture = TestBed.createComponent(OwnerSigUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
