/**
 * Created by pabloelustondo on 15-12-30.
 */

import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './herodetail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

var STYLES = [`

  .heroesList{
    float:left;
    border:solid
  }
  .heroDetails{
    border:solid
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`]

@Component({
    selector: 'jassng2app',
    directives: [HeroDetailComponent],
    styles: STYLES,
    template:`
<div class="heroesList">
<h2>My Heroes List</h2>
<ul class="heroes">
  <li *ngFor="#hero of heroes" (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
</div>
<herodetail [hero]="selectedHero"></herodetail>
        `,
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroes = this._heroService.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

}
