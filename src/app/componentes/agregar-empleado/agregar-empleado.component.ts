import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


//Servicio para insertar datos

import { CrudEmpleadoService } from 'src/app/servicio/crud-empleado.service';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioEmpleado: FormGroup;
  constructor(private fb: FormBuilder,
  private crudService:CrudEmpleadoService 
  ){

    this.formularioEmpleado = this.fb.group({

      nombre:[''],
      correo:['']
    });

   }

  ngOnInit(): void {
  }

  enviarDatos(){
    
    this.crudService.AgregarEmpleado(this.formularioEmpleado.value).subscribe();

  }

}
