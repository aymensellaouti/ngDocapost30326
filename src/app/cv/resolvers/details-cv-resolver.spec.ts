import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsCvResolver } from './details-cv-resolver';
import { Cv } from '../model/cv';

describe('detailsCvResolver', () => {
  const executeResolver: ResolveFn<Cv> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => detailsCvResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
