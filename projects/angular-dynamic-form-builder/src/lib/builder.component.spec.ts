import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicFormBuilder } from './builder.component';

describe('AngularDynamicFormBuilderComponent', () => {
  let component: AngularDynamicFormBuilder;
  let fixture: ComponentFixture<AngularDynamicFormBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDynamicFormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicFormBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
