import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

// RUTAS DE LA APLICACION
const routes: Routes = [

  {path: '',pathMatch:'full',redirectTo:'agregar-empleado'}, //Redirecciona al componente agregar-empleado
  {path: 'agregar-empleado',component:AgregarEmpleadoComponent}, // Ruta para agregarEmpleado
  {path: 'listar-empleado',component:ListarEmpleadoComponent},
  {path: 'editar-empleado/:id',component:EditarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
