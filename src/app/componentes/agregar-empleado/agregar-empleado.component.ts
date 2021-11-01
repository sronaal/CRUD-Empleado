import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
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
  private crudService:CrudEmpleadoService,
  private router:Router
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
    
    this.router.navigateByUrl('/listar-empleado')

  }

}
