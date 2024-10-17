import { Injectable } from '@angular/core';
import { Icone } from '../interfaces/Icone';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  icons: Icone []= [
    {
      "name": "Angular",
      "src": "/assets/icons/angular-icon-seeklogo-white.svg",
      "alt": "Angular-17",
     
    },
    {
      "name": "Type-Script",
      "src": "/assets/icons/typescript-seeklogo.svg",
      "alt": "Type-Script",
     
    },
    {
      "name": "C-Sharp",
      "src": "/assets/icons/c-sharp-c-seeklogo.svg",
      "alt": "C-Sharp",  
    },
    {
      "name": "MySQL",
      "src": "/assets/icons/mysql-seeklogo.svg",
      "alt": "MySQL", 
    },
  ];

  constructor() { }
}
