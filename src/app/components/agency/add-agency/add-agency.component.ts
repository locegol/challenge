import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/interfaces/agencia';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from '../../../models/agency';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent implements OnInit {
  public agency:Agencia;
  public agencia:any;
  editing:boolean=false;
  constructor( private agencyService:AgencyService,
    private router: Router, private activatedRoute:ActivatedRoute
  ) { 
    this.agency = {
      'agencia':'',
      'distrito':'',
      'provincia':'',
      'departamento':'',
      'direccion':'',
      'lat': '',
      'lon':''
    }
    this.agencia = this.activatedRoute.snapshot.params['agencia']
    /* if(this.agencia){
      this.editing = true;
      this.agencyService.addAgency(this.agency).subscribe((agencia:Agencia[]=>{
        this.agency = Agencia;

      }))

    } */
  }
  selectedAgency: Agencia = new Agency;
  openForEdit(agencia:Agency){
    this.selectedAgency = agencia;

  }

  ngOnInit(): void {
    /* this.activatedRoute.params
      .pipe(
        switchMap( ({agencia}) => this.agencyService.getData(agencia))
      )
      .subscribe(agencia=>  = agencia); */
  }
  addAgency(){
    console.log(this.agency)
    this.agencyService.addAgency(this.agency);
    this.router.navigate(['/list-agency'])

    if(this.editing){
      console.log(this.agency)
    this.agencyService.editar(this.agency,'');
    this.router.navigate(['/list-agency'])

    } else{
      console.log(this.agency)
    this.agencyService.addAgency(this.agency);
    this.router.navigate(['/list-agency'])
    }

  }
  addOrEdit(){
    if( this.selectedAgency.agencia){
      this.agencyService.addAgency(this.agency);
      this.router.navigate(['/list-agency'])
    }
    
    this.selectedAgency = new Agency;

  }
  /* esValido() {
    if (this.agency === undefined ||) {
      return false;
    }
    return true;
  } */
  /* cargar():void{
    this.activatedRoute.params.subscribe(
      e => {
        let agencia = e['agencia'];
        if(this.agency){
          this.agencyService.addAgency(this.agency);
        }
      }
    )
    console.log(this.activatedRoute.params.subscribe(
      e => {
        let agencia = e['agencia'];
        if(this.agency){
          this.agencyService.addAgency(this.agency);
        }
      }
    ));
  } */
  


}
