import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgencyComponent } from './components/agency/add-agency/add-agency.component';
import { ListAgencyComponent } from './components/agency/list-agency/list-agency.component';

const routes: Routes = [
  {path: 'add-agency', component : AddAgencyComponent},
  {path: 'add-agency/:agencia', component : AddAgencyComponent},
  {path: 'list-agency', component : ListAgencyComponent},
  {path: '**', pathMatch : 'full', redirectTo:'list-agency'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
