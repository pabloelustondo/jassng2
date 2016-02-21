/**
 * Created by pabloelustondo on 16-02-20.
 */
import {Component} from 'angular2/core'
import { HeroesComponent } from './heroes.component';

@Component({
  selector:"jassapp",
  directives: [HeroesComponent],
  template:`<h1>{{title}}</h1>
  <heroes></heroes>
  `
})
export class JassappComponent{
  public title: string = 'In Construction';
}
