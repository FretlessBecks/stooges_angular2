/// <reference path="typings/angular2/angular2.d.ts" />
///<reference path="typings/angular2/http.d.ts"/>


import {
  Component,
  View,
  For,
  bootstrap,
} from "angular2/angular2";

import {Http} from "angular2/http";


// Decorators - similar to an Angular 1 component directive
@Component({
  selector: 'stooge-app'
})
@View({
  directives: [For],
  template: `
    <h1>Stooges</h1>
      <li *for="#stooge of stooges">
        {{ stooge }}
      </li>
      <form (submit)="addStooge(stooge, $event)">
      <fieldset>
        <label for="name">Your name:</label>
        <input name="name" #stooge>
      </fieldset>
      <button type="submit">Stooge Me!</button>
    </form>
  `
})

// Similar to an Angular 1 Controller
class StoogeApp {
  stooges: Array<string>;

  constructor() {
    this.stooges = ['Larry', 'Curly', 'Moe']
  }

  addStooge(stooge, event) {
    event.preventDefault();
    this.stooges.push(stooge.value);
    stooge.value = '';
    // return false; // prevent default
  }

}

bootstrap(StoogeApp);
