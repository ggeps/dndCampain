import { TestBed, inject } from '@angular/core/testing';

import { ViewSettingsService } from './view-settings.service';

describe('ViewSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewSettingsService]
    });
  });

  it('should be created', inject([ViewSettingsService], (service: ViewSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
