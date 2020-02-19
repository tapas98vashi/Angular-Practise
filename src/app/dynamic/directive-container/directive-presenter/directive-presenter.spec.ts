import { TestBed } from '@angular/core/testing';

import { DirectivePresenterService } from './directive-presenter';

describe('DirectivePresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectivePresenterService = TestBed.get(DirectivePresenterService);
    expect(service).toBeTruthy();
  });
});
