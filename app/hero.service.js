System.register(['./mockheroes', 'angular2/core'], function(exports_1) {
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
    var mockheroes_1, core_1;
    var HeroService;
    return {
        setters:[
            function (mockheroes_1_1) {
                mockheroes_1 = mockheroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mockheroes_1.HEROES);
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mockheroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map