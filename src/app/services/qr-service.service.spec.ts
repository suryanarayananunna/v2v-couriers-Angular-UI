import { TestBed } from '@angular/core/testing';

import { QrServiceService } from './qr-service.service';

describe('QrServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrServiceService = TestBed.get(QrServiceService);
    expect(service).toBeTruthy();
  });
});
