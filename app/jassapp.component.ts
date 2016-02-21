/**
 * Created by pabloelustondo on 16-02-20.
 */
import {Component} from 'angular2/core'

@Component({
  selector:"jassapp",
  template:`<h1>{{title}}</h1>
  `
})
export class JassappComponent{
  public title: string = 'In Construction';
}
