import { TestBed } from '@angular/core/testing';

import { CrudEmpleadoService } from './crud-empleado.service';

describe('CrudEmpleadoService', () => {
  let service: CrudEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
