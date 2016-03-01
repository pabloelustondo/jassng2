System.register(['angular2/core', './hero.service', 'angular2/router'], function(exports_1) {
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
    var core_1, hero_service_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                    this.heroes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'jassboard',
                        template: "\n      <div class=\"grid grid-pad\">\n    <div *ngFor=\"#hero of heroes\" (click)=\"gotoDetail(hero)\" class=\"col-1-4\" >\n        <div class=\"module hero\">\n            <h4>{{hero.name}}</h4>\n        </div>\n    </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map