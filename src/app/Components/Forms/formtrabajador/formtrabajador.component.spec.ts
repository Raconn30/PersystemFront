import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtrabajadorComponent } from './formtrabajador.component';

describe('FormtrabajadorComponent', () => {
  let component: FormtrabajadorComponent;
  let fixture: ComponentFixture<FormtrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormtrabajadorComponent]
    });
    fixture = TestBed.createComponent(FormtrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
