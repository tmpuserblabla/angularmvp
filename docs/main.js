(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/api.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/api/api.interceptor.ts ***!
  \****************************************/
/*! exports provided: ApiHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHttpInterceptor", function() { return ApiHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ApiHttpInterceptor {
    constructor() { }
    intercept(req, next) {
        const headersConfig = {
            'Content-Type': 'application/json',
            // tslint:disable-next-line: object-literal-key-quotes
            'Accept': 'application/json'
        };
        const request = req.clone({ url: `https://jsonplaceholder.typicode.com${req.url}`, setHeaders: headersConfig });
        return next.handle(request);
    }
}
ApiHttpInterceptor.ɵfac = function ApiHttpInterceptor_Factory(t) { return new (t || ApiHttpInterceptor)(); };
ApiHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiHttpInterceptor, factory: ApiHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/api/api.module.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _api_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.interceptor */ "./src/app/api/api.interceptor.ts");





class ApiModule {
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_3__["ApiHttpInterceptor"], multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_3__["ApiHttpInterceptor"], multi: true }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] {
}
ApiService.ɵfac = function ApiService_Factory(t) { return ɵApiService_BaseFactory(t || ApiService); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: _api_module__WEBPACK_IMPORTED_MODULE_1__["ApiModule"] });
const ɵApiService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ApiService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _api_module__WEBPACK_IMPORTED_MODULE_1__["ApiModule"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: RoutingComponents, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _screens_post_list_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/screens/post-list/post.component */ "./src/app/screens/post-list/post.component.ts");
/* harmony import */ var _screens_current_post_current_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/screens/current-post/current-post.component */ "./src/app/screens/current-post/current-post.component.ts");
/* harmony import */ var _screens_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/screens/guest-book/guest-book.component */ "./src/app/screens/guest-book/guest-book.component.ts");







const routes = [
    { path: '', component: _screens_post_list_post_component__WEBPACK_IMPORTED_MODULE_2__["PostScreenComponent"] },
    { path: 'post/:id', component: _screens_current_post_current_post_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPostComponent"] },
    { path: 'guest-book', component: _screens_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_4__["GuestBookComponent"] },
];
const RoutingComponents = [
    _screens_post_list_post_component__WEBPACK_IMPORTED_MODULE_2__["PostScreenComponent"],
    _screens_current_post_current_post_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPostComponent"],
    _screens_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_4__["GuestBookComponent"],
];
const routerOptions = {
    useHash: true,
    anchorScrolling: 'enabled',
};
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return { exact: true }; };
function AppComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("active", _r2.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
} }
class AppComponent {
    constructor() {
        this.links = [
            {
                label: 'Posts',
                link: '',
            },
            {
                label: 'Guest Book',
                link: 'guest-book',
            },
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["mat-tab-nav-bar", "", "mat-align-tabs", "center", "animationDuration", "0ms", 1, "nav-bar"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "routerLinkActiveOptions", "active", 4, "ngFor", "ngForOf"], [1, "content"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "routerLinkActiveOptions", "active"], ["rla", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_a_1_Template, 3, 5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 0;\n  z-index: 1;\n  position: fixed;\n  background-color: #ffffff;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-top: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_post_post_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modules/post/post.module */ "./src/app/modules/post/post.module.ts");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ "./src/app/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/star-rating/star-rating.component */ "./src/app/components/star-rating/star-rating.component.ts");
/* harmony import */ var _screens_post_list_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/screens/post-list/post.component */ "./src/app/screens/post-list/post.component.ts");
/* harmony import */ var _screens_current_post_current_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/screens/current-post/current-post.component */ "./src/app/screens/current-post/current-post.component.ts");
/* harmony import */ var _screens_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/screens/guest-book/guest-book.component */ "./src/app/screens/guest-book/guest-book.component.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            _modules_post_post_module__WEBPACK_IMPORTED_MODULE_5__["PostModule"],
            _api_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                metaReducers: _store__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_10__["effects"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_14__["PostComponent"], _screens_post_list_post_component__WEBPACK_IMPORTED_MODULE_17__["PostScreenComponent"], _screens_current_post_current_post_component__WEBPACK_IMPORTED_MODULE_18__["CurrentPostComponent"], _screens_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_19__["GuestBookComponent"], _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"],
        _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_16__["StarRatingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
        _modules_post_post_module__WEBPACK_IMPORTED_MODULE_5__["PostModule"],
        _api_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingComponents"],
                    _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"],
                    _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_16__["StarRatingComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                    _modules_post_post_module__WEBPACK_IMPORTED_MODULE_5__["PostModule"],
                    _api_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                        metaReducers: _store__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_10__["effects"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CommentComponent {
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment" }, decls: 7, vars: 3, consts: [[1, "comment"], [1, "mat-h3", "comment__title"], [1, "mat-h5", "comment__subtitle"], [1, "mat-body", "comment__body"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.body);
    } }, styles: [".comment__title[_ngcontent-%COMP%], .comment__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.comment__subtitle[_ngcontent-%COMP%] {\n  color: #9c9c9c;\n}\n.comment__body[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxTQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQge1xyXG4gICAgJl9fdGl0bGUsICZfX3N1YnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjOWM5YzljO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss']
            }]
    }], null, { comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/star-rating/star-rating.component */ "./src/app/components/star-rating/star-rating.component.ts");




const _c0 = ["*"];
class PostComponent {
    constructor() {
        this.rating = 0;
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.starCount = 5;
    }
    onRatingChanged(postId, rating) {
        this.ratingUpdated.emit({ postId, stars: rating });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post", rating: "rating" }, outputs: { ratingUpdated: "ratingUpdated" }, ngContentSelectors: _c0, decls: 9, vars: 4, consts: [[1, "post"], [1, "mat-elevation-z0", "outline"], [1, "post__title"], [3, "rating", "starCount", "ratingUpdated"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-star-rating", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingUpdated", function PostComponent_Template_app_star_rating_ratingUpdated_7_listener($event) { return ctx.onRatingChanged(ctx.post.id, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 0, ["selector", ".footer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx.rating)("starCount", ctx.starCount);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_2__["StarRatingComponent"]], styles: [".post[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 0 auto 25px;\n  display: block;\n}\n.post__title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss'],
            }]
    }], null, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ratingUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/star-rating/star-rating.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/star-rating/star-rating.component.ts ***!
  \*****************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function StarRatingComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarRatingComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(i_r2 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "star_" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.showIcon(i_r2), " ");
} }
class StarRatingComponent {
    constructor() {
        this.rating = 3;
        this.starCount = 5;
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ratingArr = [...Array(this.starCount)].map((_, i) => i);
    }
    showIcon(index) {
        if (this.rating >= index + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    }
    onClick(rating) {
        this.ratingUpdated.emit(rating);
    }
}
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(); };
StarRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: "rating", starCount: "starCount" }, outputs: { ratingUpdated: "ratingUpdated" }, decls: 1, vars: 1, consts: [["mat-icon-button", "", "matTooltipPosition", "above", 3, "id", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "id", "click"], ["color", "primary"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StarRatingComponent_button_0_Template, 3, 2, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-star-rating',
                templateUrl: './star-rating.component.html',
                styleUrls: ['./star-rating.component.scss']
            }]
    }], null, { rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], starCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ratingUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");













const MaterialComponents = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/post/post.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/post/post.module.ts ***!
  \*********************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PostModule {
}
PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostModule });
PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/screens/current-post/current-post.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/current-post/current-post.component.ts ***!
  \****************************************************************/
/*! exports provided: CurrentPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPostComponent", function() { return CurrentPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_post_post_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/post/post.selectors */ "./src/app/store/post/post.selectors.ts");
/* harmony import */ var _store_post_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/post/post.actions */ "./src/app/store/post/post.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_comments_comments_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/comments/comments.actions */ "./src/app/store/comments/comments.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");














function CurrentPostComponent_app_post_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingUpdated", function CurrentPostComponent_app_post_1_Template_app_post_ratingUpdated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRatingChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r2)("rating", post_r2.stars);
} }
function CurrentPostComponent_mat_list_6_app_comment_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 7);
} if (rf & 2) {
    const comment_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r7);
} }
function CurrentPostComponent_mat_list_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentPostComponent_mat_list_6_app_comment_1_Template, 1, 1, "app-comment", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comments_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comments_r5);
} }
class CurrentPostComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    onRatingChanged({ postId, stars }) {
        this.store.dispatch(Object(_store_post_post_actions__WEBPACK_IMPORTED_MODULE_2__["setRatingOfPostSuccess"])({ postId, stars }));
    }
    ngOnInit() {
        this.post$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(({ id }) => {
            const postId = Number(id);
            this.store.dispatch(Object(_store_comments_comments_actions__WEBPACK_IMPORTED_MODULE_5__["loadCommentsByPostId"])({ postId }));
            return this.store.select('post').pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_1__["selectPostById"], { postId }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(post => {
                if (!post) {
                    this.store.dispatch(Object(_store_post_post_actions__WEBPACK_IMPORTED_MODULE_2__["loadPostById"])({ postId }));
                }
            }));
        }));
        this.comments$ = this.store.select('comments')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ comments }) => comments));
    }
}
CurrentPostComponent.ɵfac = function CurrentPostComponent_Factory(t) { return new (t || CurrentPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
CurrentPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentPostComponent, selectors: [["app-current-post"]], decls: 8, vars: 6, consts: [[1, "current-post-screen"], [3, "post", "rating", "ratingUpdated", 4, "ngIf"], [1, "commets-list"], ["role", "list", 4, "ngIf"], [3, "post", "rating", "ratingUpdated"], ["role", "list"], ["class", "commets-list__item", 3, "comment", 4, "ngFor", "ngForOf"], [1, "commets-list__item", 3, "comment"]], template: function CurrentPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentPostComponent_app_post_1_Template, 1, 2, "app-post", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Commets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CurrentPostComponent_mat_list_6_Template, 2, 1, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.post$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.comments$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_11__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".current-post-screen[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 25px auto 0;\n  position: relative;\n}\n\n.commets-list[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0 8px;\n  margin-bottom: 40px;\n}\n\n.commets-list__item[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: 1px solid #e1e1e1;\n}\n\n.commets-list__item[_ngcontent-%COMP%]::last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9jdXJyZW50LXBvc3QvY3VycmVudC1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUNSOztBQUNRO0VBQ0ksbUJBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvY3VycmVudC1wb3N0L2N1cnJlbnQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50LXBvc3Qtc2NyZWVuIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb21tZXRzLWxpc3Qge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuXHJcbiAgICAgICAgJjo6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-post',
                templateUrl: './current-post.component.html',
                styleUrls: ['./current-post.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/guest-book/guest-book.component.ts":
/*!************************************************************!*\
  !*** ./src/app/screens/guest-book/guest-book.component.ts ***!
  \************************************************************/
/*! exports provided: GuestBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestBookComponent", function() { return GuestBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_guests_guests_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/guests/guests.actions */ "./src/app/store/guests/guests.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function GuestBookComponent_mat_expansion_panel_31_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "alternate_email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guest_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guest_r1.email, " ");
} }
function GuestBookComponent_mat_expansion_panel_31_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "format_quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guest_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guest_r1.message, " ");
} }
function GuestBookComponent_mat_expansion_panel_31_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guest_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guest_r1.username, " ");
} }
function GuestBookComponent_mat_expansion_panel_31_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guest_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guest_r1.phone, " ");
} }
function GuestBookComponent_mat_expansion_panel_31_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guest_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guest_r1.website, " ");
} }
function GuestBookComponent_mat_expansion_panel_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GuestBookComponent_mat_expansion_panel_31_p_7_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GuestBookComponent_mat_expansion_panel_31_p_8_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GuestBookComponent_mat_expansion_panel_31_p_9_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GuestBookComponent_mat_expansion_panel_31_p_10_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GuestBookComponent_mat_expansion_panel_31_p_11_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guest_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guest_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", guest_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guest_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guest_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guest_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guest_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guest_r1.website);
} }
class GuestBookComponent {
    constructor(store) {
        this.store = store;
        this.authorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    addAuthor() {
        const { value, valid } = this.authorForm;
        if (!valid) {
            return;
        }
        this.store.dispatch(Object(_store_guests_guests_actions__WEBPACK_IMPORTED_MODULE_2__["addAuthor"])({
            data: {
                name: value.fullName,
                email: value.email,
                message: value.message
            }
        }));
        this.authorForm.reset();
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_guests_guests_actions__WEBPACK_IMPORTED_MODULE_2__["loadGuests"])());
        this.guests$ = this.store.select('guests').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ guests }) => {
            return guests;
        }));
    }
}
GuestBookComponent.ɵfac = function GuestBookComponent_Factory(t) { return new (t || GuestBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
GuestBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuestBookComponent, selectors: [["app-guest-book"]], decls: 33, vars: 4, consts: [[1, "guest-book-screen"], [1, "guest-view"], [1, "add-author"], [1, "add-author-form", 3, "formGroup", "ngSubmit"], [1, "add-author-form__fields"], ["appearance", "outline"], ["formControlName", "fullName", "type", "text", "required", "", "matInput", ""], ["formControlName", "email", "type", "email", "required", "", "matInput", ""], ["formControlName", "message", "minlength", "20", "required", "", "matInput", ""], ["mat-stroked-button", "", "color", "primary", 1, "add-author-form__button"], ["multi", "", 1, "add-author__accordion"], ["class", "add-author__expansion-item", 4, "ngFor", "ngForOf"], [1, "add-author__expansion-item"], [1, "guest"], [1, "guest__avatar", 3, "src"], [1, "guest-info"], ["class", "guest-info__item", 4, "ngIf"], [1, "guest-info__item"], ["aria-label", "alternate_email icon", 1, "guest-info__item-icon"], ["aria-label", "format_quote icon", 1, "guest-info__item-icon"], ["aria-label", "face icon", 1, "guest-info__item-icon"], ["aria-label", "phone icon", 1, "guest-info__item-icon"], ["aria-label", "website icon", 1, "guest-info__item-icon"]], template: function GuestBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GuestBookComponent_Template_form_ngSubmit_8_listener() { return ctx.addAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter your full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter something...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GuestBookComponent_mat_expansion_panel_31_Template, 12, 7, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 2, ctx.guests$));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".guest-book-screen[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 25px auto;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n}\n\n.guest-view[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  display: flex;\n}\n\n.add-author[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 58px;\n  margin-right: 25px;\n}\n\n.add-author__accordion[_ngcontent-%COMP%] {\n  width: 500px;\n  position: relative;\n}\n\n.add-author__expansion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.add-author-form__fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.add-author-form__button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n}\n\n.guest__avatar[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  right: 50px;\n  position: absolute;\n}\n\n.guest-info__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  word-break: break-word;\n}\n\n.guest-info__item-icon[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ndWVzdC1ib29rL2d1ZXN0LWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFFSTtFQUNJLFdBQUE7QUFBUjs7QUFLSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUZSOztBQUtJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFIUjs7QUFRSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMUjs7QUFVSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBUFI7O0FBVUk7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FBUlIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2d1ZXN0LWJvb2svZ3Vlc3QtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndWVzdC1ib29rLXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgMWZyIC41ZnI7XHJcbn1cclxuXHJcbi5ndWVzdC12aWV3IHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hZGQtYXV0aG9yIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDU4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblxyXG4gICAgJl9fYWNjb3JkaW9uIHtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2V4cGFuc2lvbi1pdGVtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZC1hdXRob3ItZm9ybSB7XHJcbiAgICAmX19maWVsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ3Vlc3Qge1xyXG4gICAgJl9fYXZhdGFyIHtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmd1ZXN0LWluZm8ge1xyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faXRlbS1pY29uIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guest-book',
                templateUrl: './guest-book.component.html',
                styleUrls: ['./guest-book.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/post-list/post.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/screens/post-list/post.component.ts ***!
  \*****************************************************/
/*! exports provided: PostScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostScreenComponent", function() { return PostScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_post_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/post/post.actions */ "./src/app/store/post/post.actions.ts");
/* harmony import */ var _store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/post/post.selectors */ "./src/app/store/post/post.selectors.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















function PostScreenComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.label, " ");
} }
const _c0 = function (a0) { return [a0]; };
function PostScreenComponent_app_post_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingUpdated", function PostScreenComponent_app_post_9_Template_app_post_ratingUpdated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onRatingChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r3)("rating", post_r3.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/post/" + post_r3.id));
} }
class PostScreenComponent {
    constructor(store) {
        this.store = store;
        this.sortList = [
            { value: 'ASC', label: 'New first' },
            { value: 'DESC', label: 'Old first' }
        ];
        this.selectedSortType = this.sortList[0].value;
        this.postState$ = this.store.select('post');
    }
    get posts$() {
        if (this.selectedSortType === 'ASC') {
            return this.postState$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPostsAsc"]));
        }
        else {
            return this.postState$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPostsDesc"]));
        }
    }
    onRatingChanged({ postId, stars }) {
        this.store.dispatch(Object(_store_post_post_actions__WEBPACK_IMPORTED_MODULE_2__["setRatingOfPostSuccess"])({ postId, stars }));
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_post_post_actions__WEBPACK_IMPORTED_MODULE_2__["loadPosts"])());
    }
}
PostScreenComponent.ɵfac = function PostScreenComponent_Factory(t) { return new (t || PostScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
PostScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostScreenComponent, selectors: [["app-post-screen"]], decls: 11, vars: 5, consts: [[1, "post-screen"], [1, "post-view"], ["appearance", "outline", 1, "post-view__sort"], ["name", "sort", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "post-list"], [3, "post", "rating", "ratingUpdated", 4, "ngFor", "ngForOf"], [3, "value"], [3, "post", "rating", "ratingUpdated"], [1, "footer"], ["mat-stroked-button", "", 3, "routerLink"]], template: function PostScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostScreenComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedSortType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostScreenComponent_mat_option_7_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostScreenComponent_app_post_9_Template, 4, 5, "app-post", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSortType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.posts$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".post-screen[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 25px auto;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n}\n\n.post-view[_ngcontent-%COMP%] {\n  grid-column: 2/2;\n  display: flex;\n}\n\n.post-view__sort[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 58px;\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9wb3N0LWxpc3QvcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvcG9zdC1saXN0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnIgMC41ZnI7XHJcbn1cclxuXHJcbi5wb3N0LXZpZXcge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgJl9fc29ydCB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDU4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-screen',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/comments/comments.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/comments/comments.service.ts ***!
  \*******************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api.service */ "./src/app/api/api.service.ts");



class CommentsService {
    constructor(api) {
        this.api = api;
    }
    loadCommentsByPostId(postId) {
        return this.api.get(`/posts/${postId}/comments?sort=desc`);
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/guests/guests.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/guests/guests.service.ts ***!
  \***************************************************/
/*! exports provided: GuestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsService", function() { return GuestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/api.service */ "./src/app/api/api.service.ts");





class GuestsService {
    constructor(api) {
        this.api = api;
    }
    bootstrapGuest(guest) {
        const email = guest.email.toLowerCase();
        const hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(email);
        return Object.assign(Object.assign({}, guest), { email, avatar: `https://www.gravatar.com/avatar/${hash}` });
    }
    loadGuests() {
        return this.api.get(`/users?sort=desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((guests) => guests.map((guest) => this.bootstrapGuest(guest))));
    }
    addAuthor(body) {
        return this.api.post('/users', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((guest) => this.bootstrapGuest(guest)));
    }
}
GuestsService.ɵfac = function GuestsService_Factory(t) { return new (t || GuestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
GuestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuestsService, factory: GuestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/post/post.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/post/post.service.ts ***!
  \***********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_post_post_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/post/post.module */ "./src/app/modules/post/post.module.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/api.service */ "./src/app/api/api.service.ts");




class PostService {
    constructor(api) {
        this.api = api;
    }
    loadPosts() {
        return this.api.get('/posts?sort=desc');
    }
    loadPostById(postId) {
        return this.api.get(`/posts/${postId}`);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: _modules_post_post_module__WEBPACK_IMPORTED_MODULE_1__["PostModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _modules_post_post_module__WEBPACK_IMPORTED_MODULE_1__["PostModule"]
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/comments/comments.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/store/comments/comments.actions.ts ***!
  \****************************************************/
/*! exports provided: loadCommentsByPostId, loadCommentsByPostIdSuccess, loadCommentsByPostIdFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentsByPostId", function() { return loadCommentsByPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentsByPostIdSuccess", function() { return loadCommentsByPostIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentsByPostIdFailure", function() { return loadCommentsByPostIdFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadCommentsByPostId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Comments] Load Comments By Post Id', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCommentsByPostIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Comments] Load Comments By Post Id Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCommentsByPostIdFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Comments] Load Comments By Post Id Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/comments/comments.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/store/comments/comments.effects.ts ***!
  \****************************************************/
/*! exports provided: CommentsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsEffects", function() { return CommentsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _comments_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.actions */ "./src/app/store/comments/comments.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_comments_comments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/comments/comments.service */ "./src/app/services/comments/comments.service.ts");








class CommentsEffects {
    constructor(actions$, commentsService) {
        this.actions$ = actions$;
        this.commentsService = commentsService;
        this.loadCommentsByPostId$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_comments_actions__WEBPACK_IMPORTED_MODULE_3__["loadCommentsByPostId"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((action) => {
                return this.commentsService.loadCommentsByPostId(action.postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((comments) => {
                    return _comments_actions__WEBPACK_IMPORTED_MODULE_3__["loadCommentsByPostIdSuccess"]({ comments });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error)));
            }));
        });
    }
}
CommentsEffects.ɵfac = function CommentsEffects_Factory(t) { return new (t || CommentsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_comments_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"])); };
CommentsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsEffects, factory: CommentsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_comments_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/comments/comments.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/comments/comments.reducer.ts ***!
  \****************************************************/
/*! exports provided: commentsFeatureKey, initialState, commentsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsFeatureKey", function() { return commentsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsReducer", function() { return commentsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _comments_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.actions */ "./src/app/store/comments/comments.actions.ts");


const commentsFeatureKey = 'comments';
const initialState = {
    comments: []
};
const commentsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_comments_actions__WEBPACK_IMPORTED_MODULE_1__["loadCommentsByPostIdSuccess"], (state, { comments }) => {
    return Object.assign(Object.assign({}, state), { comments: [...state.comments, ...comments.filter((comment) => {
                return comments.some(({ id }) => id !== comment.id);
            })] });
}));


/***/ }),

/***/ "./src/app/store/guests/guests.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/guests/guests.actions.ts ***!
  \************************************************/
/*! exports provided: loadGuests, loadGuestsSuccess, loadGuestsFailure, addAuthor, addAuthorSuccess, addAuthorFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGuests", function() { return loadGuests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGuestsSuccess", function() { return loadGuestsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGuestsFailure", function() { return loadGuestsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthor", function() { return addAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthorSuccess", function() { return addAuthorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthorFailure", function() { return addAuthorFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadGuests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Guests] Load Guests');
const loadGuestsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Guests] Load Guests Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadGuestsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Guests] Load Guests Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Guests] Add Author', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addAuthorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Guests] Add Author Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addAuthorFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Guests] Add Author Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/guests/guests.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/guests/guests.effects.ts ***!
  \************************************************/
/*! exports provided: GuestsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsEffects", function() { return GuestsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _guests_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests.actions */ "./src/app/store/guests/guests.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_guests_guests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/guests/guests.service */ "./src/app/services/guests/guests.service.ts");








class GuestsEffects {
    constructor(actions$, guestsService) {
        this.actions$ = actions$;
        this.guestsService = guestsService;
        this.loadGuests$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_guests_actions__WEBPACK_IMPORTED_MODULE_3__["loadGuests"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(() => {
                return this.guestsService.loadGuests().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((guests) => _guests_actions__WEBPACK_IMPORTED_MODULE_3__["loadGuestsSuccess"]({ guests })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_guests_actions__WEBPACK_IMPORTED_MODULE_3__["loadGuestsFailure"]({ error }))));
            }));
        });
        this.addAuthor$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_guests_actions__WEBPACK_IMPORTED_MODULE_3__["addAuthor"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(({ data }) => {
                return this.guestsService.addAuthor(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((guest) => _guests_actions__WEBPACK_IMPORTED_MODULE_3__["addAuthorSuccess"]({ guest })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_guests_actions__WEBPACK_IMPORTED_MODULE_3__["addAuthorFailure"]({ error }))));
            }));
        });
    }
}
GuestsEffects.ɵfac = function GuestsEffects_Factory(t) { return new (t || GuestsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_guests_guests_service__WEBPACK_IMPORTED_MODULE_5__["GuestsService"])); };
GuestsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuestsEffects, factory: GuestsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_guests_guests_service__WEBPACK_IMPORTED_MODULE_5__["GuestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/guests/guests.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/guests/guests.reducer.ts ***!
  \************************************************/
/*! exports provided: guestsFeatureKey, initialState, guestsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestsFeatureKey", function() { return guestsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestsReducer", function() { return guestsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _guests_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guests.actions */ "./src/app/store/guests/guests.actions.ts");


const guestsFeatureKey = 'guests';
const initialState = {
    guests: []
};
const guestsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_guests_actions__WEBPACK_IMPORTED_MODULE_1__["loadGuestsSuccess"], (state, { guests }) => {
    return Object.assign(Object.assign({}, state), { guests });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_guests_actions__WEBPACK_IMPORTED_MODULE_1__["addAuthorSuccess"], (state, { guest }) => {
    return Object.assign(Object.assign({}, state), { guests: [
            guest,
            ...state.guests,
        ] });
}));


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, effects, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _post_post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/post.reducer */ "./src/app/store/post/post.reducer.ts");
/* harmony import */ var _comments_comments_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments/comments.reducer */ "./src/app/store/comments/comments.reducer.ts");
/* harmony import */ var _guests_guests_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests/guests.reducer */ "./src/app/store/guests/guests.reducer.ts");
/* harmony import */ var _post_post_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.effects */ "./src/app/store/post/post.effects.ts");
/* harmony import */ var _comments_comments_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/comments.effects */ "./src/app/store/comments/comments.effects.ts");
/* harmony import */ var _guests_guests_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guests/guests.effects */ "./src/app/store/guests/guests.effects.ts");







const reducers = {
    post: _post_post_reducer__WEBPACK_IMPORTED_MODULE_1__["postReducer"],
    comments: _comments_comments_reducer__WEBPACK_IMPORTED_MODULE_2__["commentsReducer"],
    guests: _guests_guests_reducer__WEBPACK_IMPORTED_MODULE_3__["guestsReducer"]
};
const effects = [
    _post_post_effects__WEBPACK_IMPORTED_MODULE_4__["PostEffects"],
    _comments_comments_effects__WEBPACK_IMPORTED_MODULE_5__["CommentsEffects"],
    _guests_guests_effects__WEBPACK_IMPORTED_MODULE_6__["GuestsEffects"]
];
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/store/post/post.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/post/post.actions.ts ***!
  \********************************************/
/*! exports provided: loadPosts, loadPostsSuccess, loadPostsFailure, loadPostById, addPostByIdSuccess, setRatingOfPostSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPosts", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsSuccess", function() { return loadPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsFailure", function() { return loadPostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostById", function() { return loadPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostByIdSuccess", function() { return addPostByIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRatingOfPostSuccess", function() { return setRatingOfPostSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Posts');
const loadPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Posts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Posts Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Post By Id', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPostByIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Post By Id Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setRatingOfPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Set Rating Of Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/post/post.effects.ts":
/*!********************************************!*\
  !*** ./src/app/store/post/post.effects.ts ***!
  \********************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.actions */ "./src/app/store/post/post.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/post/post.service */ "./src/app/services/post/post.service.ts");








class PostEffects {
    constructor(actions$, postService) {
        this.actions$ = actions$;
        this.postService = postService;
        this.loadPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((_) => {
                return this.postService.loadPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                    return _post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostsSuccess"]({ data });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error)));
            }));
        });
        this.loadPostById$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostById"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((action) => {
                return this.postService.loadPostById(action.postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((post) => {
                    return _post_actions__WEBPACK_IMPORTED_MODULE_3__["addPostByIdSuccess"]({ post });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error)));
            }));
        });
    }
}
PostEffects.ɵfac = function PostEffects_Factory(t) { return new (t || PostEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_post_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"])); };
PostEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostEffects, factory: PostEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/post/post.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/store/post/post.reducer.ts ***!
  \********************************************/
/*! exports provided: postFeatureKey, initialState, postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFeatureKey", function() { return postFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.actions */ "./src/app/store/post/post.actions.ts");


const postFeatureKey = 'post';
const initialState = {
    posts: [],
    ratingOfPosts: []
};
const postReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostsSuccess"], (state, { data }) => {
    return Object.assign(Object.assign({}, state), { posts: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_actions__WEBPACK_IMPORTED_MODULE_1__["addPostByIdSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { posts: [...state.posts, post] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_actions__WEBPACK_IMPORTED_MODULE_1__["setRatingOfPostSuccess"], (state, { postId, stars }) => {
    if (state.ratingOfPosts.some((rating) => rating.postId === postId)) {
        return Object.assign(Object.assign({}, state), { ratingOfPosts: state.ratingOfPosts.map((rating) => {
                if (rating.postId === postId) {
                    return {
                        postId,
                        stars
                    };
                }
                return rating;
            }) });
    }
    return Object.assign(Object.assign({}, state), { ratingOfPosts: [...state.ratingOfPosts, {
                stars,
                postId
            }] });
}));


/***/ }),

/***/ "./src/app/store/post/post.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/store/post/post.selectors.ts ***!
  \**********************************************/
/*! exports provided: selectPosts, selectPostsAsc, selectPostsDesc, selectPostById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPosts", function() { return selectPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostsAsc", function() { return selectPostsAsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostsDesc", function() { return selectPostsDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostById", function() { return selectPostById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectPosts = (state) => state.posts.map((post) => {
    const rating = state.ratingOfPosts.find(({ postId }) => postId === post.id);
    if (!rating) {
        return post;
    }
    return Object.assign(Object.assign({}, post), { stars: rating.stars });
});
const selectPostsAsc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPosts, (posts) => [...posts].sort((a, b) => {
    return b.id - a.id;
}));
const selectPostsDesc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPosts, (posts) => [...posts].sort((a, b) => {
    return a.id - b.id;
}));
const selectPostById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPosts, (posts, { postId }) => posts.find(({ id }) => id === postId));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\srdev\learn\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map