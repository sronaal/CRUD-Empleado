import { Component, OnInit } from '@angular/core';

import { CrudEmpleadoService } from 'src/app/servicio/crud-empleado.service';
import { Empleado } from 'src/app/servicio/Empleado';
@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados: any;
  constructor(private crudService:CrudEmpleadoService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
      this.Empleados=respuesta;
      
    });
  }

}
