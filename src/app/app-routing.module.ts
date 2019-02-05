import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';

const routes: Routes = [
  { path: 'diretivangIf', component:  DiretivaNgifComponent },
  { path: 'diretivangswitch', component:  DiretivaNgswitchComponent},
  { path: 'diretivangfor', component: DiretivaNgforComponent},
  { path: 'diretivangclass', component: DiretivaNgclassComponent },
  { path: 'diretivangstyle', component: DiretivaNgstyleComponent },
  { path: 'operadorelvis', component: OperadorElvisComponent },
  { path: 'ngcontent', component: NgContentComponent },
  { path: 'diretivascustomizadas', component: DiretivasCustomizadasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'templateForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
