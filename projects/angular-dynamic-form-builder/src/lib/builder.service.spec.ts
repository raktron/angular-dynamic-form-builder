import { TestBed } from '@angular/core/testing';

import { AngularDynamicFormBuilderService } from './builder.service';

describe('AngularDynamicFormBuilderService', () => {
  let service: AngularDynamicFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDynamicFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
