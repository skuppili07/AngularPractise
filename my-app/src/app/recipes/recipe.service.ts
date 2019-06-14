import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[];
  constructor(private shoppingListService: ShoppingListService) { 
    this.recipes = [
      new Recipe('Onion Pasta', 'Its for a vegan guy', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('onions', 1), new Ingredient('tomatoes', 1)]),
      new Recipe('Chicken Pasta', 'Its for a non vegan guy', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('meat', 1), new Ingredient('pasta', 1)])
    ];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToCart(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
