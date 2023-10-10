import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmaterialComponent } from './formmaterial.component';

describe('FormmaterialComponent', () => {
  let component: FormmaterialComponent;
  let fixture: ComponentFixture<FormmaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormmaterialComponent]
    });
    fixture = TestBed.createComponent(FormmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
