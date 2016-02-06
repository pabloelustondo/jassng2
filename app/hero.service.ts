import {HEROES} from './mockheroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }
}

