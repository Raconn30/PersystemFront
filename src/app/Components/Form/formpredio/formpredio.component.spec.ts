import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpredioComponent } from './formpredio.component';

describe('FormpredioComponent', () => {
  let component: FormpredioComponent;
  let fixture: ComponentFixture<FormpredioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormpredioComponent]
    });
    fixture = TestBed.createComponent(FormpredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
