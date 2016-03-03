import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './herodetail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService, private _router: Router) { }

    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

}
