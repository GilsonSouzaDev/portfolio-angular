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
      "linkGitHub": "https://github.com/GilsonSouzaDev/RestAPI-RocketseatAuction",
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
