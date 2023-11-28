import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrepresentanteComponent } from './formrepresentante.component';

describe('FormrepresentanteComponent', () => {
  let component: FormrepresentanteComponent;
  let fixture: ComponentFixture<FormrepresentanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormrepresentanteComponent]
    });
    fixture = TestBed.createComponent(FormrepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
