import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() typeOfContent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showContent(contentName: string) {

    switch(contentName) {
      case "recipe" : this.typeOfContent.emit('recipe');
      break;
      case "shopping": this.typeOfContent.emit('shopping');
      break;
      default: this.typeOfContent.emit('recipe');
      break;
    }
  }

}
