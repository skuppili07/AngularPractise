import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', { static: false} ) name: ElementRef;
  @ViewChild('amount', { static: false} ) amount: ElementRef;
  @Output('ingredient') ingredientEmitter: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  private ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addShoppingList(): void {
    this.ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.ingredientEmitter.emit(this.ingredient);
  }
}
