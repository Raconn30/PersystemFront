import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormproveedorComponent } from './formproveedor.component';

describe('FormproveedorComponent', () => {
  let component: FormproveedorComponent;
  let fixture: ComponentFixture<FormproveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormproveedorComponent]
    });
    fixture = TestBed.createComponent(FormproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
