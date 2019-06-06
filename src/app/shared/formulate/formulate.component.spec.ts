import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulateComponent } from './formulate.component';

describe('FormulateComponent', () => {
  let component: FormulateComponent;
  let fixture: ComponentFixture<FormulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
