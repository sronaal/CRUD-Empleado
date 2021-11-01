import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioEmpleado: FormGroup;
  constructor(private fb: FormBuilder) {

    this.formularioEmpleado = this.fb.group({

      nombre:[''],
      correo:['']
    });

   }

  ngOnInit(): void {
  }

  enviarDatos(){
    
    console.log(this.formularioEmpleado.value);

  }

}
