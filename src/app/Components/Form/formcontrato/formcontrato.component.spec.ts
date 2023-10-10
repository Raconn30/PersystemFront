import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontratoComponent } from './formcontrato.component';

describe('FormcontratoComponent', () => {
  let component: FormcontratoComponent;
  let fixture: ComponentFixture<FormcontratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcontratoComponent]
    });
    fixture = TestBed.createComponent(FormcontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
