import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  message = "";
  registered = false;
  name:string = "";
  lastName:string = "";
  position:string="";
  entries: any;

  constructor(){

    this.entries = [

      {title:"Java es muy melo"},
      {title:"Ing Telemática papá"},
      {title:"Visual Studio"},
      {title:"Intellij"},
      {title:"Aviation"},

    ]



  }

  registerUser(){

    this.registered = true;

    this.message = "Registered user succesfully";


  }
}
