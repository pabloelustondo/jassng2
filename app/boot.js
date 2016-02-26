System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './jassapp.component'], function(exports_1) {
    var browser_1, core_1, router_1, jassapp_component_1, router_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (jassapp_component_1_1) {
                jassapp_component_1 = jassapp_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(jassapp_component_1.JassappComponent, [
                router_2.ROUTER_PROVIDERS,
                // usually
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/jassng2/' })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map