/**
 * Created by pabloelustondo on 15-12-30.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {JassappComponent} from './jassapp.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(JassappComponent, [
    ROUTER_PROVIDERS,
    // usually
    provide(APP_BASE_HREF, {useValue: '/jassng2/'})
    // for Plunker
    // bind(APP_BASE_HREF).toValue(location.pathname)
]);