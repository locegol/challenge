//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Module
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { AgencyComponent } from './components/agency/agency.component';
import { ListAgencyComponent } from './components/agency/list-agency/list-agency.component';
import { AddAgencyComponent } from './components/agency/add-agency/add-agency.component';


@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    ListAgencyComponent,
    AddAgencyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
