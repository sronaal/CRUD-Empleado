import { Injectable } from '@angular/core';

// HttpClient para interactuar con la api
import { HttpClient } from '@angular/common/http';

// Para monitorear las operaciones crud
import { Observable, observable } from 'rxjs';

import { Empleado } from './Empleado'; 

@Injectable({
  providedIn: 'root'
})
export class CrudEmpleadoService {
  
  Api: string ="http://localhost/empleados/";
  constructor(private clienteHTTP:HttpClient) {}

    AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
      return this.clienteHTTP.post(this.Api+"?insertar=1",datosEmpleado);
    }

   
}
