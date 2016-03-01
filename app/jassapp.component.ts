/**
 * Created by pabloelustondo on 16-02-20.
 */
import { Component } from 'angular2/core'
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './herodetail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }     from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector:"jassapp",
  directives: [ROUTER_DIRECTIVES],
  template:`
  <h1>{{title}}</h1>
  <a [routerLink]="['Heroes']">Heroes</a>
  <a [routerLink]="['Dashboard']">Dashboard</a>
  <router-outlet></router-outlet>
  `,
  providers: [
    HeroService,
    ROUTER_PROVIDERS,
  ]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])
export class JassappComponent{
  public title: string = 'In Construction';
}
