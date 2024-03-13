import { Injectable } from '@angular/core';
import { Card } from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card: Card[] = [
    {
      "titulo": "Rest-API: Candidato",
      "icone": "/assets/icons/c-sharp-c-seeklogo.svg",
      "altIcone": "icone-c#",
      "imagem": "/assets/card-img/rest-api candidato.jpeg",
      "altImagem": "candidato-img",
      "linkDeploy": "",
      "linkGitHub": "https://github.com/GilsonSouzaDev/RestAPI-Candidato",
      "colorCard": "var(--color-card)",
      "skills": new Map([
        ["MVC", "#f39c12"],
        ["Interfaces", "#e74c3c"],
        ["Propriedades", "#9b59b6"],
        ["Async/Await", "#1abc9c"],
        ["ASP.NET Core", "#3498db"],
        ["Facade", "#16a085"],
        ["Strategy", "#d35400"],
      ])
    },
    {
      "titulo": "Alura-Geek",
      "icone": "/assets/icons/angular-icon-seeklogo.svg",
      "altIcone": "icone-angular",
      "imagem": "/assets/card-img/alura-geek-img.png",
      "altImagem": "imagem-alura-geek",
      "linkDeploy": "https://alura-geek-topaz.vercel.app/home",
      "linkGitHub": "https://github.com/GilsonSouzaDev/alura-geek",
      "colorCard": "var(--color-card)",
      "skills": new Map([
      ["Components", "#3498db"],
      ["Services", "#e74c3c"],
      ["Routing", "#f39c12"],
      ["Forms", "#9b59b6"],
      ["RxJs", "#1abc9c"],
      ["Observables", "#c0392b"]
    ])
    },
    {
      "titulo": "",
      "icone": "",
      "altIcone": "",
      "imagem": "",
      "altImagem": "",
      "linkDeploy": "",
      "linkGitHub": "",
      "colorCard": "var(--color-card)",
      "skills": new Map([["", ""]])
    },
    {
      "titulo": "",
      "icone": "",
      "altIcone": "",
      "imagem": "",
      "altImagem": "",
      "linkDeploy": "",
      "linkGitHub": "",
      "colorCard": "var(--color-card)",
      "skills": new Map([["", ""]])
    }
  ]

  constructor() { }
}
