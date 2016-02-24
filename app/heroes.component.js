/**
 * Created by pabloelustondo on 15-12-30.
 */
System.register(['angular2/core', './herodetail.component', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, herodetail_component_1, hero_service_1;
    var STYLES, HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (herodetail_component_1_1) {
                herodetail_component_1 = herodetail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            STYLES = ["\n\n  .heroesList{\n    float:left;\n    border:solid\n  }\n  .heroDetails{\n    border:solid\n  }\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 10em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0em 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n"];
            HeroesComponent = (function () {
                function HeroesComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'heroes',
                        directives: [herodetail_component_1.HeroDetailComponent],
                        styles: STYLES,
                        template: "\n<div class=\"heroesList\">\n<h2>My Heroes List</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"#hero of heroes\" (click)=\"onSelect(hero)\">\n  <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n</div>\n<herodetail [hero]=\"selectedHero\"></herodetail>\n        "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map