System.register(['angular2/core', './heroes.component'], function(exports_1) {
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
    var core_1, heroes_component_1;
    var JassappComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            }],
        execute: function() {
            JassappComponent = (function () {
                function JassappComponent() {
                    this.title = 'In Construction';
                }
                JassappComponent = __decorate([
                    core_1.Component({
                        selector: "jassapp",
                        directives: [heroes_component_1.HeroesComponent],
                        template: "<h1>{{title}}</h1>\n  <heroes></heroes>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], JassappComponent);
                return JassappComponent;
            })();
            exports_1("JassappComponent", JassappComponent);
        }
    }
});
//# sourceMappingURL=jassapp.component.js.map