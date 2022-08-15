import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  public load: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.load = true
    }, 5000);
  }

}
