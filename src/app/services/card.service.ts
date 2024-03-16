import { Injectable } from '@angular/core';
import { Card } from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card: Card[] = [
    {
      "titulo": "Candidato",
      "icone": "/assets/icons/c-sharp-c-seeklogo.svg",
      "altIcone": "icone-c#",
      "imagem": "/assets/card-img/rest-api candidato.jpeg",
      "altImagem": "candidato-img",
      "linkDeploy": "",
      "linkGitHub": "https://github.com/GilsonSouzaDev/RestAPI-Candidato",
      "colorCard": "var(--color-card)",
      "skills": new Map([
        ["Rest-API","#778899"],
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
      "imagem": "/assets/card-img/alura-geek.png",
      "altImagem": "imagem-alura-geek",
      "linkDeploy": "https://alura-geek-topaz.vercel.app/home",
      "linkGitHub": "https://github.com/GilsonSouzaDev/alura-geek",
      "colorCard": "var(--color-card)",
      "skills": new Map([
      ["Comerce-Page","#778899"], 
      ["Components", "#3498db"],
      ["Services", "#e74c3c"],
      ["Routing", "#f39c12"],
      ["Forms", "#9b59b6"],
      ["RxJs", "#1abc9c"],
      ["Observables", "#c0392b"],
      ["Search", "#16a085"],
      ["Login", "#d35400"],
    ])
    },
    {
      "titulo": "RocketseatAuction",
      "icone": "/assets/icons/c-sharp-c-seeklogo.svg",
      "altIcone": "icone-c-sharp",
      "imagem": "/assets/card-img/auctions-img.jpeg",
      "altImagem": "leilao-imagem",
      "linkDeploy": "",
      "linkGitHub": "https://github.com/GilsonSouzaDev/RestAPI-RocketseatAuction",
      "colorCard": "var(--color-card)",
      "skills": new Map([
        ["Rest-API","#778899"], 
        ["MVC", "#f39c12"],
        ["Interfaces", "#e74c3c"],
        ["Propriedades", "#9b59b6"],
        ["Services", "#1abc9c"],
        ["ASP.NET Core", "#3498db"],
        ["nUnity", "#16a085"],
        ["Authentication", "#d35400"]
    ])
    },
    {
      "titulo": "Portifólio",
      "icone": "/assets/icons/angular-icon-seeklogo.svg",
      "altIcone": "icone-angular",
      "imagem": "/assets/card-img/portifolio-img.JPG",
      "altImagem": "imagem-portifolio",
      "linkDeploy": "https://www.gilsondev.com.br",
      "linkGitHub": "https://github.com/GilsonSouzaDev/portifolio-angular",
      "colorCard": "var(--color-card)",
      "skills": new Map([
      ["Landing Page", "#778899"],
      ["Services", "#e74c3c"],
      ["G-Sap", "#f39c12"],
      ["Forms", "#9b59b6"],
      ["NgModel", "#1abc9c"],
      ["Animations", "#c0392b"],
      ["Standalone", "#16a085"],
      ["Interfaces", "#d35400"]
    ])
    }
  ]

  constructor() { }
}
