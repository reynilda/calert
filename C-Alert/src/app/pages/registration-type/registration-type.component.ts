import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-type',
  templateUrl: './registration-type.component.html',
  styleUrls: ['./registration-type.component.scss']
})
export class RegistrationTypeComponent implements OnInit {

roleId=1;

  constructor() { }

  ngOnInit(): void {
  }
  rolechange(id:number){
    this.roleId=id;
  }

}
