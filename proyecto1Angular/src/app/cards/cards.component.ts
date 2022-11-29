import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  // Data para HTML
cardlist=[
{
    "img":"./profile.jpg",
    "title": "Card 1",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{
   "img":"./profile.jpg",
    "title": "Card 2",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{   
   "img":"./profile.jpg",
    "title": "Card 3",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
}]

  constructor() { }

  ngOnInit(): void {

  }

}
