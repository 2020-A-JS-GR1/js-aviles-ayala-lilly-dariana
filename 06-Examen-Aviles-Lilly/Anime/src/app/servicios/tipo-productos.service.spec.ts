import { TestBed } from '@angular/core/testing';

import { TipoProductosService } from './tipo-productos.service';

describe('TipoProductosService', () => {
  let service: TipoProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
