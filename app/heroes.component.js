System.register(['angular2/core', './herodetail.component', './hero.service', 'angular2/router'], function(exports_1) {
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
    var core_1, herodetail_component_1, hero_service_1, router_1;
    var HeroesComponent;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
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
                HeroesComponent.prototype.gotoDetail = function (hero) {
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'heroes',
                        directives: [herodetail_component_1.HeroDetailComponent],
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css'],
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map