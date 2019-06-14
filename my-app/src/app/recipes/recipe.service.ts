import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[];
  constructor() { 
    this.recipes = [
      new Recipe('Aloo', 'Its for a vegan guy', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
      new Recipe('Aloo', 'Its for a non vegan guy', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  
}
