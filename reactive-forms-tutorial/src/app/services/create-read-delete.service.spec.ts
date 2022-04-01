import { TestBed } from '@angular/core/testing';

import { CreateReadDeleteService } from './create-read-delete.service';

describe('CreateReadDeleteService', () => {
  let service: CreateReadDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateReadDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
