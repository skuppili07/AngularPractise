import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientEmitter: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [];
  constructor() { }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientEmitter.emit(this.ingredients.slice());
  }

  clearIngredients() : void {
    this.ingredients = [];
    this.ingredientEmitter.emit(this.ingredients.slice());
  }

  deleteIngredient(): void {
    this.ingredients.pop();
    this.ingredientEmitter.emit(this.ingredients.slice());
  }
}
