System.register(['angular2/platform/browser', './jassapp.component'], function(exports_1) {
    var browser_1, jassapp_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (jassapp_component_1_1) {
                jassapp_component_1 = jassapp_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(jassapp_component_1.JassappComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map