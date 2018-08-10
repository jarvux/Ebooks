import { TestBed, inject } from '@angular/core/testing';

import { CollectionServiceService } from './collection-service.service';

describe('CollectionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionServiceService]
    });
  });

  it('should be created', inject([CollectionServiceService], (service: CollectionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
