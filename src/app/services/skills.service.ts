import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skill: Skill[] = [
    {
      "titulo": "Angular",
      "conhecidas": new Map([
        ["Components", "#3498db"],
        ["Directives", "#2ecc71"],
        ["Services", "#e74c3c"],
        ["Routing", "#f39c12"],
        ["Forms", "#9b59b6"],
        ["Angular CLI", "#c0392b"],
      ]),
      "estudadas": new Map([
        ["RxJs", "#1abc9c"],
        ["Pipes", "#d35400"],
        ["NgRx", "#2980b9"],
        ["Observables", "#c0392b"],
        ["Signal", "#34495e"],
    ]),
  
    },
    {
      "titulo": "Type-Script",
      "conhecidas": new Map([
        ["Tipagem Estática", "#3498db"],
        ["Interfaces", "#2ecc71"],
        ["Modules", "#f39c12"],
        ["Enums", "#34495e"],
        ["Classes", "#d35400"],
        ["Async/Await", "#8e44ad"],
      ]),
      "estudadas": new Map([
        ["Namespaces", "#9b59b6"],
        ["Arrow Functions", "#16a085"],
        ["Decorators", "#1abc9c"],
        ["Advanced Types", "#2980b9"],
        ["Intersection Types", "#27ae60"],
    ]),
  
    },
    {
      "titulo": "C-Sharp",
      "conhecidas": new Map([
        ["Classes e Objetos", "#3498db"],
        ["Interfaces", "#e74c3c"],
        ["Async/Await", "#1abc9c"],
        ["Facade", "#16a085"],
        ["Strategy", "#d35400"],
        ["ASP.NET Core", "#3498db"],
      ]),
      "estudadas": new Map([
        ["Entity Framework", "#2980b9"],
        ["Linq", "#d35400"],
        ["Reflection", "#e67e22"],
        ["NUnit", "#3498db"],
        ["Design Patterns", "#8e44ad"],
    ]),
  
    },
    {
    "titulo": "MySQL",
    "conhecidas": new Map([
        ["Consultas SQL", "#3498db"],
        ["Modelagem", "#2ecc71"],
        ["Chaves Estrangeiras", "#e74c3c"],
        ["Índices", "#f39c12"],
        ["Views", "#95a5a6"],   
       
    ]),
    "estudadas": new Map([
        ["Triggers", "#34495e"],
        ["Normalização", "#16a085"],
        ["Backup e Restore", "#d35400"],
        ["Database Security", "#e67e22"],
        ["Stored Procedures", "#9b59b6"],
    ]),
  }
  
  ];

  constructor() { }
}
