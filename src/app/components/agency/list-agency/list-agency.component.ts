import { Component, OnInit } from '@angular/core';
import { Agencia } from 'src/app/interfaces/agencia';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from '../../../models/agency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-agency',
  templateUrl: './list-agency.component.html',
  styleUrls: ['./list-agency.component.css']
})
export class ListAgencyComponent implements OnInit {

  public listAgency: Agencia[];
  constructor(
    private agencyService: AgencyService , private router: Router
  ) { 
    this.listAgency = [];
  }

  ngOnInit() {
    console.log(this.agencyService.listAgency)
    if(this.agencyService.listAgency.length >0){
      this.listAgency = this.agencyService.listAgency;

    }
    //promesa
    else {
      this.agencyService.getData('assets/data/agency.json').subscribe( list =>{
        this.listAgency = list
      })

    }
  }
  selectedAgency: Agencia = new Agency;
  openForEdit(agencia:Agencia){
    this.agencyService.getData('assets/data/agency.json').forEach(list =>{
      this.listAgency = list})
    this.router.navigate(['/add-agency'])

  }

}
