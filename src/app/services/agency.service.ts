import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agencia } from '../interfaces/agencia';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private _listAgency: Agencia[];

  constructor(private http: HttpClient) { 
    this._listAgency = [];
  }
  get listAgency():Agencia[] {
    return this._listAgency

  }
  addAgency ( agency: Agencia ){
    this._listAgency.push(agency);
  }
  getData( path:string ){
    return this.http.get<Agencia[]>(path).pipe(
      map(list => {
        this._listAgency = list;
        return list;
      })
    )

  }
  editar(agency: Agencia , path:string){
    console.log(path);
  return this.http.put("http://localhost:4200/#/add-agency/"+agency.agencia,agency);
  }
}
