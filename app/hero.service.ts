import {HEROES} from './mockheroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id:number) {
        return Promise.resolve(HEROES).then(
                heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}

