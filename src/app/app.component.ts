import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{ hero.name }} details!</h2>
    <div><label>id: </label>{{ hero.id }}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
  // {{ bound inside HTML }}: interpolation
})
export class AppComponent {
  name = 'Angular 2!';
  title = 'Tour of Heroes';
  hero = {
    id: 1,
    name: 'Windstorm'
  };
}
