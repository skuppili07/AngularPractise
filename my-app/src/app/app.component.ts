import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  showRecipe: boolean = true;
  showShopping: boolean;

  constructor() {

  }

  decideContent(typeOfContent: string) {
    this.showRecipe = false;
    this.showShopping = false;
    switch (typeOfContent) {
      case "recipe": this.showRecipe = true;
      break;

      case "shopping": this.showShopping = true;
      break;

      default: break;
    }
  }
}
