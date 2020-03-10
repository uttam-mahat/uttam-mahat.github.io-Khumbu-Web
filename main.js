(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'khumbu';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _brief_introduction_brief_introduction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brief-introduction/brief-introduction.component */ "./src/app/brief-introduction/brief-introduction.component.ts");
/* harmony import */ var _village_profile_village_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./village-profile/village-profile.component */ "./src/app/village-profile/village-profile.component.ts");
/* harmony import */ var _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organization-structure/organization-structure.component */ "./src/app/organization-structure/organization-structure.component.ts");
/* harmony import */ var _committees_committees_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./committees/committees.component */ "./src/app/committees/committees.component.ts");
/* harmony import */ var _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./central-act-law-and-directives/act-law.component */ "./src/app/central-act-law-and-directives/act-law.component.ts");
/* harmony import */ var _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./local-act-law-and-directives/local-act-law-and-directives.component */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts");
/* harmony import */ var _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./trekking/trekking.component */ "./src/app/trekking/trekking.component.ts");
/* harmony import */ var _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./password-and-visa/password-and-visa.component */ "./src/app/password-and-visa/password-and-visa.component.ts");
/* harmony import */ var _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./travel-and-tourism-information/travel-and-tourism-information.component */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts");
/* harmony import */ var _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mountain/mountain.component */ "./src/app/mountain/mountain.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./egov-services/egov-service.component */ "./src/app/egov-services/egov-service.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./news-notice-detail/news-notice-detail.component */ "./src/app/news-notice-detail/news-notice-detail.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _brief_introduction_brief_introduction_component__WEBPACK_IMPORTED_MODULE_9__["BriefIntroductionComponent"],
                _village_profile_village_profile_component__WEBPACK_IMPORTED_MODULE_10__["VillageProfileComponent"],
                _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_11__["OrganizationStructureComponent"],
                _committees_committees_component__WEBPACK_IMPORTED_MODULE_12__["CommitteesComponent"],
                _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_13__["ActLawComponent"],
                _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_14__["LocalActLawAndDirectivesComponent"],
                _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_15__["TrekkingComponent"],
                _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_16__["PasswordAndVisaComponent"],
                _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_17__["TravelAndTourismInformationComponent"],
                _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_18__["MountainComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__["ContactUsComponent"],
                _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_20__["EgovServiceComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_22__["MediaComponent"],
                _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_23__["NewsNoticeDetailComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_24__["ReportsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _brief_introduction_brief_introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brief-introduction/brief-introduction.component */ "./src/app/brief-introduction/brief-introduction.component.ts");
/* harmony import */ var _village_profile_village_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./village-profile/village-profile.component */ "./src/app/village-profile/village-profile.component.ts");
/* harmony import */ var _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-structure/organization-structure.component */ "./src/app/organization-structure/organization-structure.component.ts");
/* harmony import */ var _committees_committees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./committees/committees.component */ "./src/app/committees/committees.component.ts");
/* harmony import */ var _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./central-act-law-and-directives/act-law.component */ "./src/app/central-act-law-and-directives/act-law.component.ts");
/* harmony import */ var _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-act-law-and-directives/local-act-law-and-directives.component */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts");
/* harmony import */ var _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trekking/trekking.component */ "./src/app/trekking/trekking.component.ts");
/* harmony import */ var _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password-and-visa/password-and-visa.component */ "./src/app/password-and-visa/password-and-visa.component.ts");
/* harmony import */ var _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./travel-and-tourism-information/travel-and-tourism-information.component */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts");
/* harmony import */ var _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mountain/mountain.component */ "./src/app/mountain/mountain.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./egov-services/egov-service.component */ "./src/app/egov-services/egov-service.component.ts");
/* harmony import */ var _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news-notice-detail/news-notice-detail.component */ "./src/app/news-notice-detail/news-notice-detail.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
















var router = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"] },
    { path: 'brief-introduction/:id', component: _brief_introduction_brief_introduction_component__WEBPACK_IMPORTED_MODULE_2__["BriefIntroductionComponent"] },
    { path: 'village-profile', component: _village_profile_village_profile_component__WEBPACK_IMPORTED_MODULE_3__["VillageProfileComponent"] },
    { path: 'organization-structure', component: _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationStructureComponent"] },
    { path: 'committees', component: _committees_committees_component__WEBPACK_IMPORTED_MODULE_5__["CommitteesComponent"] },
    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"] },
    { path: 'act-law/:id', component: _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_6__["ActLawComponent"] },
    { path: 'local-act-law-and-directives', component: _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_7__["LocalActLawAndDirectivesComponent"] },
    { path: 'trekking', component: _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_8__["TrekkingComponent"] },
    { path: 'password-and-visa', component: _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_9__["PasswordAndVisaComponent"] },
    { path: 'travel-and-tourism-information/:id', component: _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_10__["TravelAndTourismInformationComponent"] },
    { path: 'mountain/:id', component: _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_11__["MountainComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"] },
    { path: 'egov-service/:id', component: _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_13__["EgovServiceComponent"] },
    { path: 'news-notice-detail/:id', component: _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_14__["NewsNoticeDetailComponent"] }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router, { useHash: true });


/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Brief Intro and Live Image Section Start -->\n\n<section class=\"brief-intro-page\">\n  <div class=\"container\">\n    <div class=\"row\" *ngFor=\"let data of introduction\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              <p>{{ data.titleInEnglish }}</p>\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto\">\n            <div class=\"blurb-detail\">\n              <p [innerHTML]=\"data.descriptionInEnglish\"></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"section-wrapper\">\n          <div class=\"img-wrapper\">\n            <img [src]=\"environment.url +'/' +data.image\" alt=\"\" class=\"brief-img\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Brief Intro and Live Image Section Closed -->\n"

/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyaWVmLWludHJvZHVjdGlvbi9icmllZi1pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.component.ts ***!
  \********************************************************************/
/*! exports provided: BriefIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefIntroductionComponent", function() { return BriefIntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _introduction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction.service */ "./src/app/brief-introduction/introduction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BriefIntroductionComponent = /** @class */ (function () {
    function BriefIntroductionComponent(http, service, activatedRoute, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.introduction = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getIntroductionById(id).subscribe(function (data) {
                _this.introduction = data;
            });
        });
    }
    BriefIntroductionComponent.prototype.ngOnInit = function () {
    };
    BriefIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brief-introduction',
            template: __webpack_require__(/*! ./brief-introduction.component.html */ "./src/app/brief-introduction/brief-introduction.component.html"),
            providers: [_introduction_service__WEBPACK_IMPORTED_MODULE_2__["IntroductionService"]],
            styles: [__webpack_require__(/*! ./brief-introduction.component.scss */ "./src/app/brief-introduction/brief-introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _introduction_service__WEBPACK_IMPORTED_MODULE_2__["IntroductionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BriefIntroductionComponent);
    return BriefIntroductionComponent;
}());



/***/ }),

/***/ "./src/app/brief-introduction/introduction.service.ts":
/*!************************************************************!*\
  !*** ./src/app/brief-introduction/introduction.service.ts ***!
  \************************************************************/
/*! exports provided: IntroductionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionService", function() { return IntroductionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroductionService = /** @class */ (function () {
    function IntroductionService(http) {
        this.http = http;
    }
    IntroductionService.prototype.getIntroductionById = function (introductionId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/introduction/' + introductionId);
    };
    IntroductionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IntroductionService);
    return IntroductionService;
}());



/***/ }),

/***/ "./src/app/central-act-law-and-directives/act-law.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/act-law.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Central Act Law and Directives Section Start -->\n\n<section class=\"act-law-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Act Law and Directives\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\" *ngFor=\"let data of actLaw\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-6 col-md-6\">\n                <div class=\"blurb-title\">\n                  {{ data.titleInEnglish }}\n                </div>\n                <div class=\"blurb-detail\">\n                  <p [innerHTML]=\"data.descriptionInEnglish\">\n\n                  </p>\n                  <p> Link: <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\"> {{ data.titleInEnglish }}\n                    </a>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Central Act Law and Directives Section Closed -->"

/***/ }),

/***/ "./src/app/central-act-law-and-directives/act-law.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/act-law.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwtYWN0LWxhdy1hbmQtZGlyZWN0aXZlcy9hY3QtbGF3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/central-act-law-and-directives/act-law.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/act-law.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActLawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActLawComponent", function() { return ActLawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _actlaw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actlaw-service */ "./src/app/central-act-law-and-directives/actlaw-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActLawComponent = /** @class */ (function () {
    function ActLawComponent(http, service, activatedRoute, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.actLaw = [];
        this.centralact = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getActLawById(id).subscribe(function (data) {
                _this.actLaw = data;
            });
        });
    }
    ActLawComponent.prototype.ngOnInit = function () {
    };
    ActLawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-act-law',
            template: __webpack_require__(/*! ./act-law.component.html */ "./src/app/central-act-law-and-directives/act-law.component.html"),
            providers: [_actlaw_service__WEBPACK_IMPORTED_MODULE_2__["ActLawService"]],
            styles: [__webpack_require__(/*! ./act-law.component.scss */ "./src/app/central-act-law-and-directives/act-law.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _actlaw_service__WEBPACK_IMPORTED_MODULE_2__["ActLawService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ActLawComponent);
    return ActLawComponent;
}());



/***/ }),

/***/ "./src/app/central-act-law-and-directives/actlaw-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/actlaw-service.ts ***!
  \******************************************************************/
/*! exports provided: ActLawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActLawService", function() { return ActLawService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActLawService = /** @class */ (function () {
    function ActLawService(http) {
        this.http = http;
    }
    ActLawService.prototype.getActLawById = function (actLawId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/act-law-files/' + actLawId);
    };
    ActLawService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActLawService);
    return ActLawService;
}());



/***/ }),

/***/ "./src/app/committees/committees-service.ts":
/*!**************************************************!*\
  !*** ./src/app/committees/committees-service.ts ***!
  \**************************************************/
/*! exports provided: Committeeservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Committeeservice", function() { return Committeeservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Committeeservice = /** @class */ (function () {
    function Committeeservice(http) {
        this.http = http;
    }
    Committeeservice.prototype.getCommittees = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/committees');
    };
    Committeeservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Committeeservice);
    return Committeeservice;
}());



/***/ }),

/***/ "./src/app/committees/committees.component.html":
/*!******************************************************!*\
  !*** ./src/app/committees/committees.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Committees Section Start -->\n\n<section class=\"committees-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\" *ngFor=\"let data of committees\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              {{ data.titleInEnglish }}\n            </div>\n          </div>\n          <div class=\"section-blurb mx-h-none mn-h-auto h-auto\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-12 col-md-12\">\n                <div class=\"blurb-detail\">\n                  {{ data.descriptionInEnglish }}\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Committees Section Closed -->\n"

/***/ }),

/***/ "./src/app/committees/committees.component.scss":
/*!******************************************************!*\
  !*** ./src/app/committees/committees.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1pdHRlZXMvY29tbWl0dGVlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/committees/committees.component.ts":
/*!****************************************************!*\
  !*** ./src/app/committees/committees.component.ts ***!
  \****************************************************/
/*! exports provided: CommitteesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteesComponent", function() { return CommitteesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _committees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./committees-service */ "./src/app/committees/committees-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommitteesComponent = /** @class */ (function () {
    function CommitteesComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.committees = [];
        this.service.getCommittees().subscribe(function (data) {
            _this.committees = data;
        });
    }
    CommitteesComponent.prototype.ngOnInit = function () {
    };
    CommitteesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-committees',
            template: __webpack_require__(/*! ./committees.component.html */ "./src/app/committees/committees.component.html"),
            providers: [_committees_service__WEBPACK_IMPORTED_MODULE_2__["Committeeservice"]],
            styles: [__webpack_require__(/*! ./committees.component.scss */ "./src/app/committees/committees.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _committees_service__WEBPACK_IMPORTED_MODULE_2__["Committeeservice"]])
    ], CommitteesComponent);
    return CommitteesComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"brief-intro-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Contact\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"section-blurb mn-h-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"contact-item-wrapper\">\n                    <div class=\"contact-symbol\"><i class=\"fas fa-map-marker-alt\"></i>\n                    </div>\n                    <div class=\"section-title-wrapper\">\n                      <div class=\"section-subtitle\"> Address </div>\n                    </div>\n                    <div class=\"blurb-wrapper\"> Khumjung, Solukhumbu,Nepal </div>\n                  </div>\n                </div>\n                <div class=\"col-12\">\n                  <div class=\"contact-item-wrapper\">\n                    <div class=\"contact-symbol\"><i class=\"fas fa-mobile-alt\"></i>\n                    </div>\n                    <div class=\"section-title-wrapper\">\n                      <div class=\"section-subtitle\"> Phone </div>\n                    </div>\n                    <div class=\"blurb-wrapper\"> 01-4546789 </div>\n                  </div>\n                </div>\n                <div class=\"col-12\">\n                  <div class=\"contact-item-wrapper\">\n                    <div class=\"contact-symbol\"><i class=\"fas fa-envelope\"></i></div>\n                    <div class=\"section-title-wrapper\">\n                      <div class=\"section-subtitle\"> Email </div>\n                    </div>\n                    <div class=\"blurb-wrapper\"><a href=\"mailto:khumbu@gmail.com\">\n                        khumbu@gmail.com</a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"section-wrapper mt-2\">\n                <div class=\"blurb-title\">\n                  Please fill up the below form if you have any feedback.\n                </div>\n                <div class=\"alert alert-primary blurb-title\" role=\"alert\" *ngIf=\"sentContact\">\n                  Thank You!! We will get back to you as soon as possible\n                </div>\n                <form [formGroup]=\"addContactForm\">\n                  <div formGroupName=\"contactDetail\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleFormControlInput0\">Name*</label>\n                      <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput0\" formControlName=\"name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"exampleFormControlInput1\">Email*</label>\n                      <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" formControlName=\"email\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"exampleFormControlInput0\">Subject*</label>\n                      <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput2\" formControlName=\"subject\">\n                    </div>\n                    <div class=\"form-group\">\n                      <div>\n                        <label for=\"exampleFormControlInput0\">Type</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"radio1\">\n                          <input type=\"radio\" class=\"form-check-input form-contorl\" id=\"radio1\" value=\"feedback\" checked\n                            formControlName=\"feedback\">\n                          <span>Feedback</span>\n                        </label>\n                      </div>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"radio2\">\n                          <input type=\"radio\" class=\"form-check-input form-contorl\" id=\"radio2\" value=\"greviance\"\n                            checked formControlName=\"feedback\">\n                          <span>Greivance</span>\n                        </label>\n                      </div>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\" for=\"radio3\">\n                          <input type=\"radio\" class=\"form-check-input form-contorl\" id=\"radio3\" value=\"other\" checked\n                            formControlName=\"feedback\">\n                          <span>Other</span>\n                        </label>\n                      </div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" name=\"otherMessage\" id=\"QueryType\"\n                      formControlName=\"typeMessage\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleFormControlTextarea1\">Message*</label>\n                      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"8\"\n                        formControlName=\"message\"></textarea>\n                    </div>\n                    <form [formGroup]=\"aFormGroup\">\n                      <ngx-recaptcha2 #captchaElem [siteKey]=\"siteKey\" (reset)=\"handleReset()\" (expire)=\"handleExpire()\"\n                        (load)=\"handleLoad()\" (success)=\"handleSuccess($event)\" [useGlobalDomain]=\"false\" [size]=\"size\"\n                        [hl]=\"lang\" [theme]=\"theme\" [type]=\"type\" formControlName=\"recaptcha\">\n                      </ngx-recaptcha2>\n                    </form>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\"\n                    (click)=\"submitContactForm(addContactForm)\">Submit</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-symbol i {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n  font-size: 44px;\n  color: #1783ca; }\n\n.contact-symbol {\n  text-align: center;\n  margin-bottom: 10px; }\n\n.contact-item-wrapper {\n  text-align: center;\n  margin-bottom: 18px; }\n\n.contact-item-wrapper .section-subtitle {\n  font-size: 18px;\n  font-weight: 600;\n  color: #212121;\n  letter-spacing: 0.5px; }\n\n.contact-item-wrapper .blurb-wrapper,\n.contact-item-wrapper .blurb-wrapper a {\n  font-size: 14px;\n  color: #212121;\n  letter-spacing: 0.5px; }\n\n.contact-item-wrapper .blurb-wrapper a:hover {\n  color: #1783ca; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcVXNlcnNcXGFkbWluXFxEZXNrdG9wXFxraHVtYnUtZGV2LW1hc3Rlci9zcmNcXGFwcFxcY29udGFjdC11c1xcY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7O0VBRUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1zeW1ib2wgaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIGNvbG9yOiAjMTc4M2NhO1xyXG59XHJcblxyXG4uY29udGFjdC1zeW1ib2wge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1pdGVtLXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1pdGVtLXdyYXBwZXIgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbS13cmFwcGVyIC5ibHVyYi13cmFwcGVyLFxyXG4uY29udGFjdC1pdGVtLXdyYXBwZXIgLmJsdXJiLXdyYXBwZXIgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbS13cmFwcGVyIC5ibHVyYi13cmFwcGVyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTc4M2NhO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.service */ "./src/app/contact-us/contact-us.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(http, service, router, formBuilder) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.formBuilder = formBuilder;
        this.siteKey = '6LdHQKUUAAAAAB04AKVSvGPO3HFqUjxmDhP1Y9Fl';
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.captchaIsExpired = false;
        this.lang = 'en';
        this.useGlobalDomain = false;
        this.sentContact = false;
        this.addContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'contactDetail': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                'subject': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                'typeMessage': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                'feedback': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
            })
        });
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.aFormGroup = this.formBuilder.group({
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ContactUsComponent.prototype.submitContactForm = function (fg) {
        var _this = this;
        var name = fg.value.contactDetail.name;
        var email = fg.value.contactDetail.email;
        var subject = fg.value.contactDetail.subject;
        var typeMessage = fg.value.contactDetail.typeMessage;
        var message = fg.value.contactDetail.message;
        var type = fg.value.contactDetail.feedback;
        var contactUsDetails = {
            name: name, email: email, subject: subject, type: type, message: message, typeMessage: typeMessage
        };
        if (this.captchaSuccess == true) {
            this.service.createContactUs(contactUsDetails).subscribe(function (response) {
                if (response.status == 200) {
                    _this.sentContact = true;
                    fg.reset('');
                }
            });
        }
    };
    ContactUsComponent.prototype.handleSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
        this.captchaIsExpired = false;
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            providers: [_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"]],
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.service.ts":
/*!**************************************************!*\
  !*** ./src/app/contact-us/contact-us.service.ts ***!
  \**************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsService = /** @class */ (function () {
    function ContactUsService(http) {
        this.http = http;
    }
    ContactUsService.prototype.createContactUs = function (contactUsDetails) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/contact-us', contactUsDetails, { observe: 'response' });
    };
    ContactUsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactUsService);
    return ContactUsService;
}());



/***/ }),

/***/ "./src/app/egov-services/egov-service-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/egov-services/egov-service-service.ts ***!
  \*******************************************************/
/*! exports provided: EgovService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgovService", function() { return EgovService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EgovService = /** @class */ (function () {
    function EgovService(http) {
        this.http = http;
    }
    EgovService.prototype.getEgovServicesFile = function (egovServiceId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services-file/' + egovServiceId);
    };
    EgovService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EgovService);
    return EgovService;
}());



/***/ }),

/***/ "./src/app/egov-services/egov-service.component.html":
/*!***********************************************************!*\
  !*** ./src/app/egov-services/egov-service.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Vital Registration Section Start -->\n\n<section class=\"vital-registration-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"section-wrapper\">\n                    <div class=\"section-title\">\n                        <div class=\"title\">\n                            E-Government Services\n                        </div>\n                    </div>\n                    <div class=\"section-blurb vital-registration-links\">\n                        <div class=\"blurb-detail\">\n                            <p>\n                            </p>\n                            <ol class=\"list-style-type\">\n                                <li *ngFor=\"let data of egovServices\">\n                                    <a [href]=\"environment.url +'/' +data.file\"\n                                        target=\"_blank\">{{ data.titleInEnglish }}</a>\n                                </li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Vital Registration Section Closed -->"

/***/ }),

/***/ "./src/app/egov-services/egov-service.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/egov-services/egov-service.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vnb3Ytc2VydmljZXMvZWdvdi1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/egov-services/egov-service.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/egov-services/egov-service.component.ts ***!
  \*********************************************************/
/*! exports provided: EgovServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgovServiceComponent", function() { return EgovServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _egov_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egov-service-service */ "./src/app/egov-services/egov-service-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EgovServiceComponent = /** @class */ (function () {
    function EgovServiceComponent(http, service, activatedRoute, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.egovServices = [];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getEgovServicesFile(id).subscribe(function (data) {
                _this.egovServices = data;
            });
        });
    }
    EgovServiceComponent.prototype.ngOnInit = function () {
    };
    EgovServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-egov-service',
            template: __webpack_require__(/*! ./egov-service.component.html */ "./src/app/egov-services/egov-service.component.html"),
            providers: [_egov_service_service__WEBPACK_IMPORTED_MODULE_2__["EgovService"]],
            styles: [__webpack_require__(/*! ./egov-service.component.scss */ "./src/app/egov-services/egov-service.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _egov_service_service__WEBPACK_IMPORTED_MODULE_2__["EgovService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EgovServiceComponent);
    return EgovServiceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer-service.ts":
/*!******************************************!*\
  !*** ./src/app/footer/footer-service.ts ***!
  \******************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterService = /** @class */ (function () {
    function FooterService(http) {
        this.http = http;
    }
    FooterService.prototype.getContactDetails = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/contact-details');
    };
    FooterService.prototype.getSocialMedia = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/social-media');
    };
    FooterService.prototype.getCopyright = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/copyright');
    };
    FooterService.prototype.getNews = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/news-notices');
    };
    FooterService.prototype.getEgovServices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services');
    };
    FooterService.prototype.getReports = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/reports');
    };
    FooterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FooterService);
    return FooterService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <!-- footer top area -->\n    <div class=\"footer-top-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"section-wrapper\">\n                        <div class=\"section-title\">\n                            <div class=\"title\">\n                                Notices\n                            </div>\n                        </div>\n                        <div class=\"section-blurb blurb-overflow\">\n                            <div class=\"blurb-item\">\n                                <a href=\"#\" *ngFor=\"let data of news\" (click)=\"displayNews($event, data.id)\">\n                                    <div class=\"blurb-title\">\n                                        {{ data.titleInEnglish }}\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"section-wrapper\">\n                        <div class=\"section-title\">\n                            <div class=\"title\">\n                                eGov services\n                            </div>\n                        </div>\n                        <div class=\"section-blurb blurb-overflow\">\n                            <div class=\"blurb-item\">\n                                <a href=\"#\" *ngFor=\"let data of egovServices\"\n                                    (click)=\"displayEgovServices($event, data.id)\">\n                                    <div class=\"blurb-title\">\n                                        {{ data.titleInEnglish }}\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"section-wrapper\">\n                        <div class=\"section-title\">\n                            <div class=\"title\">\n                                Reports\n                            </div>\n                        </div>\n                        <div class=\"section-blurb blurb-overflow\">\n                            <div class=\"blurb-item\">\n                                <a *ngFor=\"let data of reports\" [href]=\"environment.url +'/' +data.file\"\n                                    target=\"_blank\">\n                                    <div class=\"blurb-title\">\n                                        {{ data.titleInEnglish }}\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"section-wrapper\">\n                        <div class=\"section-title\">\n                            <div class=\"title\">\n                                Contact Details\n                            </div>\n                        </div>\n                        <div class=\"section-blurb blurb-overflow\" *ngFor=\"let data of contactDetails\">\n                            <div class=\"blurb-item\">\n                                <div class=\"blurb-title\">\n                                    {{ data.addressInEnglish }}\n                                </div>\n                            </div>\n                            <div class=\"blurb-item\">\n                                <div class=\"blurb-title\">\n                                    Phone no.: <a href=\"tel: data.phoneNumber\">{{ data.phoneNumber }}</a>,\n                                </div>\n                            </div>\n                            <div class=\"blurb-item\">\n                                <div class=\"blurb-title\">\n                                    Fax: {{ data.fax }}\n                                </div>\n                            </div>\n                            <div class=\"blurb-item\">\n                                <div class=\"blurb-title\">\n                                    Email: <a href=\"mailto: data.email\">{{ data.email }}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- footer bottom area -->\n    <div class=\"footer-bottom-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"footer-bottom\">\n                        <div class=\"social-media-area\">\n                            <ul>\n                                <li *ngFor=\"let data of socialMedia\">\n                                    <a [href]=\"'http://' +data.link\">\n                                        <i [class]=\"'fa fa-' +data.name\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"copyright-text\">\n                            <div class=\"copyright\" *ngFor=\"let data of copyright\">\n                                {{ data.descriptionInEnglish }}\n                            </div>\n                            <div class=\"developedBy\">\n                                Developed by: <a href=\"#\">Krennova Pvt Ltd.</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-service */ "./src/app/footer/footer-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = /** @class */ (function () {
    function FooterComponent(http, service, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.contactDetails = [];
        this.socialMedia = [];
        this.copyright = [];
        this.news = [];
        this.egovServices = [];
        this.reports = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.service.getContactDetails().subscribe(function (data) {
            _this.contactDetails = data;
        });
        this.service.getSocialMedia().subscribe(function (data) {
            _this.socialMedia = data;
        });
        this.service.getCopyright().subscribe(function (data) {
            _this.copyright = data;
        });
        this.service.getNews().subscribe(function (data) {
            _this.news = data;
        });
        this.service.getEgovServices().subscribe(function (data) {
            _this.egovServices = data;
        });
        this.service.getReports().subscribe(function (data) {
            _this.reports = data;
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.displayNews = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/news-notice-detail', id]);
    };
    FooterComponent.prototype.displayEgovServices = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/egov-service', id]);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            providers: [_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"]],
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header-service.ts":
/*!******************************************!*\
  !*** ./src/app/header/header-service.ts ***!
  \******************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
    }
    HeaderService.prototype.getMountains = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/mountains');
    };
    HeaderService.prototype.getIntroductions = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/introduction');
    };
    HeaderService.prototype.getReports = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/reports');
    };
    HeaderService.prototype.getActLaw = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/act-law');
    };
    HeaderService.prototype.getTravelAndTourism = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/travel-and-tourism');
    };
    HeaderService.prototype.getEgovServices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services');
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar-blue bg-blue\">\n  <div class=\"bg-img-wrapper\">\n    <div id=\"anim_cloud1\">\n      <img src=\"../../assets/img/cloud1.png\">\n    </div>\n    <div id=\"anim_cloud2\">\n      <img src=\"../../assets/img/cloud2.png\">\n    </div>\n    <div id=\"anim_cloud3\">\n      <img src=\"../../assets/img/cloud3.png\">\n    </div>\n    <div id=\"anim_mountain\">\n      <img src=\"../../assets/img/khumbu-transparent-bg.png\">\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"header-top-area\">\n        <div class=\"header-left\">\n          <div class=\"header-title\">\n            <h1> Khumbu Pasanglhamu Rural Municipality, Ward 4 Office </h1>\n            <span> Khumjung,\n              Solukhumbu,Nepal </span>\n          </div><a class=\"navbar-brand logo-left\" href=\"#\">\n            <img alt=\"\" class=\"logo\" src=\"../../assets/img/logo_0.png\"></a>\n          <a class=\"navbar-brand logo-right\" [routerLink]=\"['/']\">\n            <img src=\"../../assets/img/khumbu_pasang_logo.png\" class=\"logo\" alt=\"\">\n          </a>\n        </div>\n\n        <div class=\"header-right ml-auto\">\n          <div class=\"lng-wrapper\">\n            <img src=\"../../assets/img/en.png\" alt=\"english-language\">\n            <span>|</span>\n            <img class=\"nepali-language\" src=\"../../assets/img/nepal.png\" alt=\"nepali-language\">\n          </div>\n        </div>\n\n\n      </div>\n\n      <nav class=\"navbar navbar-expand-lg header-bottom-area\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\">\n            <svg viewBox='0 0 30 30'>\n              <path stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'\n                d='M4 7h22M4 15h22M4 23h22' /></svg>\n          </span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mrl-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n            </li>\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownIntro\" role=\"button\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n                Introduction\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownIntro\">\n                <a *ngFor=\"let data of introductions\" (click)=\"displayIntroduction($event, data.id)\"\n                  class=\"dropdown-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                  {{ data.titleInEnglish }}\n                </a>\n                <a class=\"dropdown-item\" routerLink=\"/village-profile\" [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact:true}\">\n                  Village Profile\n                </a>\n              </div>\n            </li>\n\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/reports\">Reports</a>\n            </li>\n\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownServices\" role=\"button\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                eGov Services\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownServices\">\n                <a *ngFor=\"let data of egovServices\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayEgovServices($event, data.id)\">\n                  {{ data.titleInEnglish }}\n                </a>\n              </div>\n            </li>\n\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownActLaw\" role=\"button\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Act, Law and Directives\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownActLaw\">\n                <a *ngFor=\"let data of acts\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayActLaw($event, data.id)\">\n                  {{ data.titleInEnglish }}\n                </a>\n              </div>\n            </li>\n\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownTravelTourism\" role=\"button\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Travel And Tourism\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownTravelTourism\">\n                <a *ngFor=\"let data of travelTourism\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayTravelAndTourism($event, data.id)\">\n                  {{ data.titleInEnglish }}\n                </a>\n                <a class=\"dropdown-item dropdown-toggle\" href=\"#\" id=\"navbarDropdownMountains\" role=\"button\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Mountains\n                </a>\n                <div class=\"dropdown-menu lvl2\" aria-labelledby=\"navbarDropdownMountains\">\n                  <a *ngFor=\"let data of mountains\" (click)=\"displayMountain($event, data.id)\" class=\"dropdown-item\"\n                    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                    {{ data.mountainNameInEnglish }}\n                  </a>\n                </div>\n              </div>\n            </li>\n\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/contact-us']\">Contact Us</a>\n            </li>\n\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</header>\n\n<!-- <header class=\"navbar-blue bg-blue\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"header-top-area\">\n      <div class=\"header-left\">\n        <a class=\"navbar-brand logo-left\" href=\"#\">\n          <img src=\"../../assets/img/logo_0.png\" class=\"logo\" alt=\"\">\n        </a>\n\n        <div class=\"header-title\">\n          <h1>\n            Khumbu Pasang Lhamu Rural Muncipality, Ward 4 Office\n          </h1>\n          <span>\n            Khumjung, Solukhumbu,Nepal\n          </span>\n        </div>\n      </div>\n\n      <div class=\"header-right ml-auto\">\n        <div class=\"search-lng-wrapper\">\n          <div class=\"lng-wrapper\">\n            <span>English</span>\n            <span>|</span>\n            <span>Nepali</span>\n          </div>\n          <form action=\"\" class=\"form-inline my-2 my-lg-0\" [formGroup]=\"searchForm\">\n            <div class=\"input-group mb-3\">\n              <input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-label=\"Search\"\n                aria-describedby=\"basic-addon2\" formControlName=\"searchQuery\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n            </div>\n          </form>\n        </div>\n\n        <a class=\"navbar-brand logo-right\" [routerLink]=\"['/']\">\n          <img src=\"assets/img/khumbu_pasang_logo.png\" class=\"logo\" alt=\"\">\n        </a>\n      </div>\n\n\n    </div>\n\n    <nav class=\"navbar navbar-expand-lg header-bottom-area\">\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\">\n          <svg viewBox='0 0 30 30'>\n            <path stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'\n              d='M4 7h22M4 15h22M4 23h22' /></svg>\n        </span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mrl-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n          </li>\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownIntro\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Introduction\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownIntro\">\n              <a *ngFor=\"let data of introductions\" (click)=\"displayIntroduction($event, data.id)\" class=\"dropdown-item\"\n                [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                {{ data.titleInEnglish }}\n              </a>\n              <a class=\"dropdown-item\" routerLink=\"/village-profile\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">\n                Village Profile\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownReports\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Reports\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownReports\">\n              <a *ngFor=\"let data of reports\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" [href]=\"environment.url +'/' +data.file\" target=\"_blank\">\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownServices\" role=\"button\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              eGov Services\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownServices\">\n              <a *ngFor=\"let data of egovServices\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayEgovServices($event, data.id)\" >\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownActLaw\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Act, Law and Directives\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownActLaw\">\n              <a *ngFor=\"let data of acts\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayActLaw($event, data.id)\">\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownTravelTourism\" role=\"button\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Travel And Tourism\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownTravelTourism\">\n              <a *ngFor=\"let data of travelTourism\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayTravelAndTourism($event, data.id)\">\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMountains\" role=\"button\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Mountains\n            </a>\n\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMountains\">\n\n              <a *ngFor=\"let data of mountains\" (click)=\"displayMountain($event, data.id)\" class=\"dropdown-item\"\n                [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                {{ data.mountainNameInEnglish }}\n              </a>\n            </div>\n\n          </li>\n\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/contact-us']\">Contact Us</a>\n          </li>\n\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header> -->\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#anim_mountain,\n#anim_cloud1,\n#anim_cloud2,\n#anim_cloud3 {\n  position: absolute;\n  top: 0; }\n\n#anim_cloud1 {\n  left: 50%;\n  top: 0;\n  margin-left: -947.7px;\n  opacity: 1;\n  -webkit-animation: anim_cloud1 20s linear infinite;\n          animation: anim_cloud1 20s linear infinite; }\n\n#anim_cloud1 img {\n  -webkit-animation: anim_cloud1_opacity 20s linear infinite;\n          animation: anim_cloud1_opacity 20s linear infinite; }\n\n#anim_cloud2 {\n  left: 50%;\n  top: 0;\n  margin-left: -566.05px;\n  opacity: 1;\n  -webkit-animation: anim_cloud2 20s linear infinite;\n          animation: anim_cloud2 20s linear infinite; }\n\n#anim_cloud2 img {\n  -webkit-animation: anim_cloud2_opacity 20s linear infinite;\n          animation: anim_cloud2_opacity 20s linear infinite; }\n\n#anim_cloud3 {\n  left: 50%;\n  top: 0;\n  margin-left: 0;\n  -webkit-transform: translateX(-170%);\n          transform: translateX(-170%);\n  opacity: 1;\n  -webkit-animation: anim_cloud3 20s linear infinite;\n          animation: anim_cloud3 20s linear infinite;\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s; }\n\n#anim_cloud3 img {\n  -webkit-animation: anim_cloud3_opacity 20s linear infinite;\n          animation: anim_cloud3_opacity 20s linear infinite;\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s; }\n\n#anim_mountain {\n  left: 50%;\n  margin-left: -490px;\n  top: 0;\n  display: block;\n  opacity: 1;\n  -webkit-transform: translate(190px, 0px);\n          transform: translate(190px, 0px); }\n\n#anim_mountain img {\n  width: 100%; }\n\n/* Move it (define the animation) */\n\n@-webkit-keyframes anim_cloud3 {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@keyframes anim_cloud3 {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@-webkit-keyframes anim_cloud3_opacity {\n  0% {\n    opacity: 0.2; }\n  40% {\n    opacity: 0.8; }\n  50% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0; } }\n\n@keyframes anim_cloud3_opacity {\n  0% {\n    opacity: 0.2; }\n  40% {\n    opacity: 0.8; }\n  50% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes anim_cloud2 {\n  0% {\n    -webkit-transform: translateX(80%);\n            transform: translateX(80%); }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n@keyframes anim_cloud2 {\n  0% {\n    -webkit-transform: translateX(80%);\n            transform: translateX(80%); }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n@-webkit-keyframes anim_cloud2_opacity {\n  0% {\n    opacity: 0.2; }\n  35% {\n    opacity: 0.6; }\n  50% {\n    opacity: 0.8; }\n  70% {\n    opacity: 0.6; }\n  100% {\n    opacity: 0; } }\n\n@keyframes anim_cloud2_opacity {\n  0% {\n    opacity: 0.2; }\n  35% {\n    opacity: 0.6; }\n  50% {\n    opacity: 0.8; }\n  70% {\n    opacity: 0.6; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes anim_cloud1 {\n  0% {\n    -webkit-transform: translateX(-40%);\n            transform: translateX(-40%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@keyframes anim_cloud1 {\n  0% {\n    -webkit-transform: translateX(-40%);\n            transform: translateX(-40%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@-webkit-keyframes anim_cloud1_opacity {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.6; }\n  65% {\n    opacity: 0.8; }\n  85% {\n    opacity: 0.6; }\n  100% {\n    opacity: 0; } }\n\n@keyframes anim_cloud1_opacity {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 0.6; }\n  65% {\n    opacity: 0.8; }\n  85% {\n    opacity: 0.6; }\n  100% {\n    opacity: 0; } }\n\nheader.navbar-blue.bg-blue {\n  background: transparent;\n  height: 220px;\n  position: relative; }\n\n.bg-img-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 220px;\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background: #1783ca;\n  z-index: -1; }\n\n.navbar-wrapper {\n  max-width: unset;\n  width: unset;\n  margin: 0 auto; }\n\nheader.header-top-area {\n  display: block; }\n\n.header-left {\n  width: 100%;\n  max-width: 400px; }\n\n.header-left .header-title {\n  display: block;\n  margin-bottom: 12px;\n  padding-top: 34px; }\n\n.header-left .header-title h1 {\n  font-size: 20px;\n  letter-spacing: 0.5px; }\n\n.header-left .header-title span {\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  display: block; }\n\n.header-top-area {\n  width: 100%;\n  max-width: 400px; }\n\nnav.navbar.navbar-expand-lg.header-bottom-area {\n  position: absolute;\n  top: 0;\n  right: 80px;\n  background: #fff;\n  padding: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n\n.navbar-expand-lg .navbar-nav .nav-link {\n  padding: 6px 8px; }\n\n.left {\n  margin-right: 30px; }\n\n.dropdown-menu.show.lvl2 {\n  left: 60px !important; }\n\n.navbar-collapse.collapse.show {\n  z-index: 999; }\n\n.header-right {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.header-right .lng-wrapper {\n  color: #fff; }\n\n.header-right .lng-wrapper img:hover {\n  cursor: pointer; }\n\n.lng-wrapper img.nepali-language {\n  height: 10px; }\n\n.header-right .lng-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin: 0 4px; }\n\n/* navigationBar Start */\n\n.navbar .navbar-toggler {\n  color: white;\n  border-color: white;\n  border-radius: 0;\n  margin-bottom: 10px; }\n\nheader {\n  padding: 20px 20px 0;\n  box-shadow: 0px 8px 14px -4px rgba(23, 131, 202, 0.16); }\n\n.navbar-brand .logo {\n  width: 60px;\n  height: 54px; }\n\n.header-title {\n  color: #fff;\n  margin-right: 10px; }\n\n.header-title h1 {\n  font-size: 2.4rem;\n  margin-top: 10px;\n  margin-bottom: 4px; }\n\n.header-title span {\n  font-size: 1.8rem; }\n\n.header-right .search-lng-wrapper {\n  font-size: 1.2rem;\n  color: #fff;\n  margin-right: 14px; }\n\n.header-right .lng-wrapper {\n  text-align: right;\n  margin-bottom: 6px;\n  font-size: 1.4rem; }\n\n.header-right input.form-control {\n  font-size: 1.2rem; }\n\n.header-right .input-group-append i {\n  color: #808080; }\n\n.navbar-blue.bg-blue {\n  background: #1e56b1; }\n\nnav.navbar {\n  padding-bottom: 0; }\n\nnav .nav-item .nav-link {\n  font-size: 1.6rem;\n  color: #444444;\n  opacity: 0.9; }\n\n.navbar-expand-lg .navbar-nav .nav-link {\n  transition: all 0.4s ease; }\n\nnav .nav-item.active .nav-link {\n  color: #212121;\n  opacity: 1; }\n\nnav .nav-item .nav-link:hover {\n  color: #212121;\n  opacity: 1;\n  cursor: pointer; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.dropdown-menu a:hover {\n  cursor: pointer; }\n\n.navbar-nav .dropdown-menu {\n  border: 0;\n  box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3); }\n\n.navbar-nav .dropdown-menu .dropdown-item {\n  font-size: 1.6rem; }\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #e0e0e0; }\n\n.dropdown-item.active,\n.dropdown-item:active {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #e0e0e0; }\n\n.navbar-expand-lg .navbar-nav {\n  flex-wrap: wrap; }\n\n@media (max-width: 992px) {\n  #anim_mountain {\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    right: 0;\n    -webkit-transform: translate(0px, 100px);\n            transform: translate(0px, 100px); }\n  .header-left .header-title h1 {\n    font-size: 18px; }\n  .header-left .header-title {\n    padding-top: 14px; }\n  header.navbar-blue.bg-blue {\n    height: 220px; }\n  .bg-img-wrapper {\n    height: 220px; }\n  .header-top-area {\n    max-width: unset; }\n  .header-left {\n    max-width: unset; }\n  nav.navbar.navbar-expand-lg.header-bottom-area {\n    background: transparent; }\n  .navbar .navbar-toggler {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 8px; }\n  .navbar .navbar-toggler + .navbar-collapse.collapse.show {\n    margin-top: 44px; }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    background: #fff; }\n  .navbar-nav .dropdown-menu {\n    margin-bottom: 8px; }\n  nav .nav-item .nav-link:hover {\n    background: #e4e4e4; }\n  nav.navbar.navbar-expand-lg.header-bottom-area {\n    width: 100%;\n    left: 0;\n    right: 0;\n    padding: 0; }\n  .navbar .navbar-toggler + .navbar-collapse.collapse.show {\n    box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3); }\n  button.navbar-toggler {\n    margin-right: 14px; }\n  .header-right {\n    right: 60px; }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-left: 14px; } }\n\n@media (max-width: 768.98px) {\n  #anim_mountain {\n    display: none; }\n  .navbar-brand .logo {\n    width: 60px;\n    height: 50px; }\n  .header-title h1 {\n    font-size: 1.8rem; }\n  .header-title span {\n    font-size: 1.4rem; }\n  .header-right .lng-wrapper {\n    font-size: 1.2rem; }\n  .dropdown-menu.show.lvl2 {\n    left: 0;\n    margin-left: 60px; } }\n\n/* navigationBar Closed */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXGtodW1idS1kZXYtbWFzdGVyL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLGtCQUFrQjtFQUNsQixNQUFNLEVBQUE7O0FBR1I7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0RBQTBDO1VBQTFDLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLDBEQUFrRDtVQUFsRCxrREFBa0QsRUFBQTs7QUFHcEQ7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUNOLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0RBQTBDO1VBQTFDLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLDBEQUFrRDtVQUFsRCxrREFBa0QsRUFBQTs7QUFHcEQ7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUVOLGNBQWM7RUFDZCxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixrREFBMEM7VUFBMUMsMENBQTBDO0VBQzFDLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSwwREFBa0Q7VUFBbEQsa0RBQWtEO0VBQ2xELDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixjQUFjO0VBQ2QsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxXQUFXLEVBQUE7O0FBR2IsbUNBQUE7O0FBQ0E7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUc5QjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQSxFQUFBOztBQU4vQjtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRzlCO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBLEVBQUE7O0FBSS9CO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFkZDtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUc1QjtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQSxFQUFBOztBQU5oQztFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRzVCO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBLEVBQUE7O0FBSWhDO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQWxCZDtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBLEVBQUE7O0FBTi9CO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFHN0I7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUEsRUFBQTs7QUFJL0I7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBbEJkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQUtkO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZSxFQUFBOztBQUlqQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQU1mLHdCQUFBOztBQUNBO0VBQ0UsWUFBeUI7RUFDekIsbUJBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFTckI7RUFDRSxvQkFBb0I7RUFFcEIsc0RBQXNELEVBQUE7O0FBV3hEO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQWVuQjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBRWpCLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFFRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUdaO0VBRUUsY0FBYztFQUNkLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFNBQVM7RUFDVCxnREFBZ0QsRUFBQTs7QUFHbEQ7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFHM0I7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBU0U7SUFDRSxTQUFTO0lBQ1QsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBQTtFQUdsQztJQUNFLGVBQWUsRUFBQTtFQUdqQjtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSx1QkFBdUIsRUFBQTtFQUd6QjtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWUsRUFBQTtFQUdqQjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0UsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVSxFQUFBO0VBR1o7SUFDRSxnREFBZ0QsRUFBQTtFQUdsRDtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQkFBa0IsRUFBQSxFQUNuQjs7QUFJSDtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxPQUFPO0lBQ1AsaUJBQWlCLEVBQUEsRUFDbEI7O0FBSUgseUJBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FuaW1fbW91bnRhaW4sXHJcbiNhbmltX2Nsb3VkMSxcclxuI2FuaW1fY2xvdWQyLFxyXG4jYW5pbV9jbG91ZDMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbiNhbmltX2Nsb3VkMSB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTk0Ny43cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBhbmltYXRpb246IGFuaW1fY2xvdWQxIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNhbmltX2Nsb3VkMSBpbWcge1xyXG4gIGFuaW1hdGlvbjogYW5pbV9jbG91ZDFfb3BhY2l0eSAyMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jYW5pbV9jbG91ZDIge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC01NjYuMDVweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGFuaW1hdGlvbjogYW5pbV9jbG91ZDIgMjBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuI2FuaW1fY2xvdWQyIGltZyB7XHJcbiAgYW5pbWF0aW9uOiBhbmltX2Nsb3VkMl9vcGFjaXR5IDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNhbmltX2Nsb3VkMyB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMDtcclxuICAvLyBtYXJnaW4tbGVmdDogLTcyMS44ODhweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE3MCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYW5pbWF0aW9uOiBhbmltX2Nsb3VkMyAyMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG59XHJcblxyXG4jYW5pbV9jbG91ZDMgaW1nIHtcclxuICBhbmltYXRpb246IGFuaW1fY2xvdWQzX29wYWNpdHkgMjBzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDEwcztcclxufVxyXG5cclxuI2FuaW1fbW91bnRhaW4ge1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTQ5MHB4O1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE5MHB4LCAwcHgpO1xyXG59XHJcblxyXG4jYW5pbV9tb3VudGFpbiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBNb3ZlIGl0IChkZWZpbmUgdGhlIGFuaW1hdGlvbikgKi9cclxuQGtleWZyYW1lcyBhbmltX2Nsb3VkMyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltX2Nsb3VkM19vcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbV9jbG91ZDIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MCUpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltX2Nsb3VkMl9vcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG5cclxuICAzNSUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1fY2xvdWQxIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbV9jbG91ZDFfb3BhY2l0eSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG5cclxuICA2NSUge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgODUlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5oZWFkZXIubmF2YmFyLWJsdWUuYmctYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iZy1pbWctd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjMTc4M2NhO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubmF2YmFyLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgd2lkdGg6IHVuc2V0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIuaGVhZGVyLXRvcC1hcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQgLmhlYWRlci10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBwYWRkaW5nLXRvcDogMzRweDtcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IC5oZWFkZXItdGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCAuaGVhZGVyLXRpdGxlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXItdG9wLWFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbm5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5oZWFkZXItYm90dG9tLWFyZWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgcGFkZGluZzogNnB4IDhweDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuc2hvdy5sdmwyIHtcclxuICBsZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uuc2hvdyB7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IC5sbmctd3JhcHBlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQgLmxuZy13cmFwcGVyIGltZzpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmxuZy13cmFwcGVyIGltZy5uZXBhbGktbGFuZ3VhZ2Uge1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCAubG5nLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDRweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogbmF2aWdhdGlvbkJhciBTdGFydCAqL1xyXG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItd3JhcHBlciB7XHJcbiAgLy8gICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgLy8gICBib3gtc2hhZG93OiAwcHggOHB4IDE0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTRweCAtNHB4IHJnYmEoMjMsIDEzMSwgMjAyLCAwLjE2KTtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXItdG9wLWFyZWEge1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCAubG9nbyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQge1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IHtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCAuc2VhcmNoLWxuZy13cmFwcGVyIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQgLmxuZy13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQgaW5wdXQuZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCAuaW5wdXQtZ3JvdXAtYXBwZW5kIGkge1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcblxyXG4ubmF2YmFyLWJsdWUuYmctYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzFlNTZiMTtcclxufVxyXG5cclxubmF2Lm5hdmJhciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICAvLyAgIGNvbG9yOiAjZWJlYmViO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAvLyAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcblxyXG5uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICAvLyAgIGNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpmb2N1cyxcclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiAjMTYxODFiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsXHJcbi5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMxNjE4MWI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAvLyAjYW5pbV9tb3VudGFpbixcclxuICAvLyAjYW5pbV9jbG91ZDEsXHJcbiAgLy8gI2FuaW1fY2xvdWQyLFxyXG4gIC8vICNhbmltX2Nsb3VkMyB7XHJcbiAgLy8gICBkaXNwbGF5OiBub25lO1xyXG4gIC8vIH1cclxuXHJcbiAgI2FuaW1fbW91bnRhaW4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItbGVmdCAuaGVhZGVyLXRpdGxlIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItbGVmdCAuaGVhZGVyLXRpdGxlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyLm5hdmJhci1ibHVlLmJnLWJsdWUge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICB9XHJcblxyXG4gIC5iZy1pbWctd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10b3AtYXJlYSB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1sZWZ0IHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICBuYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcuaGVhZGVyLWJvdHRvbS1hcmVhIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlcisubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLnNob3cge1xyXG4gICAgbWFyZ2luLXRvcDogNDRweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcclxuICB9XHJcblxyXG4gIG5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5oZWFkZXItYm90dG9tLWFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIrLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZS5zaG93IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4Ljk4cHgpIHtcclxuICAjYW5pbV9tb3VudGFpbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCAubG9nbyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGl0bGUgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRpdGxlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXJpZ2h0IC5sbmctd3JhcHBlciB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51LnNob3cubHZsMiB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyogbmF2aWdhdGlvbkJhciBDbG9zZWQgKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-service */ "./src/app/header/header-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, service, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.mountains = [];
        this.introductions = [];
        this.reports = [];
        this.acts = [];
        this.travelTourism = [];
        this.egovServices = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.service.getMountains().subscribe(function (data) {
            _this.mountains = data;
        });
        this.service.getIntroductions().subscribe(function (data) {
            _this.introductions = data;
        });
        this.service.getReports().subscribe(function (data) {
            _this.reports = data;
        });
        this.service.getActLaw().subscribe(function (data) {
            _this.acts = data;
        });
        this.service.getTravelAndTourism().subscribe(function (data) {
            _this.travelTourism = data;
        });
        this.service.getEgovServices().subscribe(function (data) {
            _this.egovServices = data;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.displayMountain = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/mountain', id]);
    };
    HeaderComponent.prototype.displayIntroduction = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/brief-introduction', id]);
    };
    HeaderComponent.prototype.displayActLaw = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/act-law', id]);
    };
    HeaderComponent.prototype.displayTravelAndTourism = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/travel-and-tourism-information', id]);
    };
    HeaderComponent.prototype.displayEgovServices = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/egov-service', id]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/index/index-service.ts":
/*!****************************************!*\
  !*** ./src/app/index/index-service.ts ***!
  \****************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexService = /** @class */ (function () {
    function IndexService(http) {
        this.http = http;
    }
    IndexService.prototype.getNewsNotices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/news-notices');
    };
    IndexService.prototype.getWelcome = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/welcome');
    };
    IndexService.prototype.getOfficials = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/officials');
    };
    IndexService.prototype.getApplicationFormat = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services-file');
    };
    IndexService.prototype.getEgovernmentServices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services');
    };
    IndexService.prototype.getPlanAndProjects = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/act-law');
    };
    IndexService.prototype.getLinks = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/links');
    };
    IndexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- marquee start -->\n<div class=\"marquee\">\n  <div class=\"marquee-heading\">Latest News</div>\n  <p>Scrolling text Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iste incidunt, adipisci eum\n    temporibus eos dolorem, voluptatum officia dicta quasi libero recusandae quo quas? Eaque quasi rem blanditiis odit\n    fugit.</p>\n</div>\n\n<!-- marquee close -->\n\n<!-- Intro Section Start -->\n\n<section class=\"intro\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-12 m-b-20\">\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src=\"assets/img/img_0535.jpg\" alt=\"First slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"assets/img/img_1163.jpg\" alt=\"Second slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"assets/img/2013-11-10-162204.jpg\" alt=\"Third slide\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12 m-b-20\">\n        <div class=\"section-wrapper overflow-shadow\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              News and Notices\n            </div>\n          </div>\n          <div class=\"section-blurb blurb-overflow\">\n            <div class=\"blurb-item\" *ngFor=\"let data of newsNotices\">\n              <a href=\"#\" (click)=\"displayNews($event, data.id)\">\n                <div class=\"blurb-title\">\n                  {{ data.titleInEnglish }}\n                </div>\n                <div class=\"blurb-duration\">\n                  <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                  <span> {{ data.updatedOn }}</span>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Intro Section Closed -->\n\n<!-- Brief Intro and Live Image Section Start -->\n\n<section class=\"brief-intro\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper live-image\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Live Image Of Everest\n            </div>\n          </div>\n          <div class=\"section-blurb\">\n            <div class=\"live-item-wrapper\">\n              <div class=\"live-img-item\">\n                <div class=\"blurb-img\">\n                  <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"live-img\">\n                  <div class=\"blurb-title\">\n                    Everest Live Web Cam\n                  </div>\n                </div>\n              </div>\n              <div class=\"live-img-item\">\n                <div class=\"blurb-img\">\n                  <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"live-img\">\n                  <div class=\"blurb-title\">\n                    Everest Live Web Cam\n                  </div>\n                </div>\n              </div>\n              <div class=\"live-img-item\">\n                <div class=\"blurb-img\">\n                  <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"live-img\">\n                  <div class=\"blurb-title\">\n                    Real Time Data\n                  </div>\n                </div>\n              </div>\n              <div class=\"live-img-item\">\n                <div class=\"blurb-img\">\n                  <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"live-img\">\n                  <div class=\"blurb-title\">\n                    Everest Live Web Cam\n                  </div>\n                </div>\n              </div>\n              <div class=\"live-img-item\">\n                <div class=\"blurb-img\">\n                  <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"live-img\">\n                  <div class=\"blurb-title\">\n                    Real Time Data\n                  </div>\n                </div>\n              </div>\n              <div class=\"live-img-item\">\n                <div class=\"blurb-img\">\n                  <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"live-img\">\n                  <div class=\"blurb-title\">\n                    Real Time Data\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"brief-intro\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\" *ngFor=\"let data of welcome\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Introduction\n            </div>\n          </div>\n          <div class=\"section-blurb intro-desc\">\n            <div class=\"blurb-detail\">\n              <p [innerHTML]=\"data.descriptionInEnglish\">\n              </p>\n              <a class=\"read-more-cta\" routerLink=\"/brief-introduction\">Read More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Brief Intro and Live Image Section Closed -->\n\n<!-- officials and important links Section Start -->\n\n<section class=\"officials-links\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper overflow-shadow\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Officials\n            </div>\n          </div>\n          <div class=\"section-blurb officials-card blurb-overflow\">\n            <div class=\"blurb-card col-lg-4 col-md-6\" *ngFor=\"let data of officials\">\n              <div class=\"blurb-img\">\n                <a href=\"#\">\n                  <img [src]=\"environment.url +'/' +data.image\" alt=\"\" class=\"official-img\">\n                </a>\n              </div>\n              <div class=\"blurb-body\">\n                <div class=\"blurb-title\">\n                  <a href=\"#\"> {{ data.nameInEnglish }} </a>\n                </div>\n                <div class=\"blurb-position\">\n                  {{ data.designationInEnglish }}\n                </div>\n                <div class=\"mail-address\">\n                  <a href=\"mailto: data.email\">{{ data.email }}</a>\n                </div>\n                <div class=\"phone-number\">\n                  <a href=\"tel: data.phoneNumber\">{{ data.phoneNumber }}</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"section-wrapper overflow-shadow blurb-links\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Important Links\n            </div>\n          </div>\n          <div class=\"section-blurb blurb-overflow\">\n            <div class=\"blurb-item\" *ngFor=\"let data of links\">\n              <a [href]=\"'http://' +data.link\" target=\"_blank\">\n                <div class=\"blurb-title\">\n                  {{ data.titleInEnglish }}\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- officials and important links Section Closed -->\n"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".officials-links .section-blurb.officials-card,\n.officials-links .section-blurb.blurb-overflow {\n  max-height: 450px;\n  height: 350px; }\n\n.officials-links .section-blurb.blurb-overflow {\n  min-height: 250px;\n  max-height: 350px; }\n\n.section-blurb.officials-card.blurb-overflow {\n  margin-bottom: 40px; }\n\n.intro .section-blurb.blurb-overflow {\n  min-height: 464px; }\n\n.brief-intro .section-blurb {\n  min-height: 250px;\n  margin-bottom: 24px; }\n\nimg.live-img {\n  width: 100%;\n  height: 140px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top; }\n\n.section-wrapper.live-image .blurb-img {\n  height: 200px; }\n\n.blurb-img .blurb-title {\n  background: #222;\n  width: 100%;\n  color: #fff;\n  font-weight: normal;\n  padding: 4px 14px; }\n\n.section-wrapper.live-image .blurb-img {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  height: 100%; }\n\n.section-wrapper .live-item-wrapper .live-img-item {\n  width: 250px; }\n\n.brief-intro .section-wrapper.live-image .section-blurb {\n  width: 100%;\n  height: 250px; }\n\n.brief-intro .section-wrapper.live-image .live-item-wrapper::-webkit-scrollbar-track {\n  -webkit-box-shadow: 0 0 6px rgba(196, 196, 196, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5; }\n\n.brief-intro .section-wrapper.live-image .live-item-wrapper::-webkit-scrollbar {\n  width: 0px;\n  height: 5px;\n  background-color: #F5F5F5; }\n\n.brief-intro .section-wrapper.live-image .live-item-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(95, 95, 95, 0.3);\n  background-color: #555; }\n\n.brief-intro .section-wrapper.live-image .live-item-wrapper {\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n.brief-intro .section-wrapper.live-image .live-item-wrapper .live-img-item {\n  display: inline-block;\n  margin-right: 24px; }\n\n.brief-intro .section-blurb.intro-desc {\n  min-height: unset; }\n\n.section-blurb.intro-desc .blurb-detail p {\n  position: relative;\n  height: 240px;\n  overflow: hidden; }\n\n.section-blurb.intro-desc .blurb-detail p::after {\n  content: '';\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  position: absolute;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%); }\n\na.read-more-cta {\n  color: #2056AF;\n  font-size: 16px;\n  font-weight: normal; }\n\na.read-more-cta:hover {\n  color: #AF2032;\n  cursor: pointer; }\n\n/* marquee start */\n\n.marquee {\n  height: 50px;\n  overflow: hidden;\n  position: relative;\n  background: #ececec;\n  color: #212121; }\n\n.marquee .marquee-heading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: #af2032;\n  color: #fff;\n  font-size: 14px;\n  letter-spacing: 0.8px;\n  padding: 14px;\n  z-index: 1; }\n\n.marquee p {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-size: 14px;\n  line-height: 50px;\n  letter-spacing: 0.8px;\n  text-align: center;\n  /* Starting position */\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  /* Apply animation to this element */\n  -webkit-animation: scroll-left 60s linear infinite;\n          animation: scroll-left 60s linear infinite; }\n\n/* Move it (define the animation) */\n\n@-webkit-keyframes scroll-left {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n@keyframes scroll-left {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n/* marquee close */\n\n@media (max-width: 992px) {\n  .section-wrapper.live-image .blurb-img {\n    margin-top: 12px; }\n  .section-wrapper.live-image .blurb-title {\n    margin-bottom: 14px; } }\n\n@media (max-width: 768px) {\n  .marquee p {\n    -webkit-animation: scroll-left 40s linear infinite;\n            animation: scroll-left 40s linear infinite; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxca2h1bWJ1LWRldi1tYXN0ZXIvc3JjXFxhcHBcXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFVckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsdUJBQW9CO0tBQXBCLG9CQUFvQixFQUFBOztBQUl0QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdmO0VBQ0Usb0RBQW9EO0VBQ3BELG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1CQUFtQjtFQUNuQix1REFBdUQ7RUFDdkQsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnR0FBZ0csRUFBQTs7QUFHbEc7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCLGtCQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFBO0VBQ0EsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixvQ0FBQTtFQUNBLGtEQUEwQztVQUExQywwQ0FBMEMsRUFBQTs7QUFHNUMsbUNBQUE7O0FBQ0E7RUFDRTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUc3QjtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQSxFQUFBOztBQU5oQztFQUNFO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBLEVBQUE7O0FBSWhDLGtCQUFBOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLG1CQUFtQixFQUFBLEVBQ3BCOztBQUdIO0VBQ0U7SUFDRSxrREFBMEM7WUFBMUMsMENBQTBDLEVBQUEsRUFDM0MiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZpY2lhbHMtbGlua3MgLnNlY3Rpb24tYmx1cmIub2ZmaWNpYWxzLWNhcmQsXHJcbi5vZmZpY2lhbHMtbGlua3MgLnNlY3Rpb24tYmx1cmIuYmx1cmItb3ZlcmZsb3cge1xyXG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5vZmZpY2lhbHMtbGlua3MgLnNlY3Rpb24tYmx1cmIuYmx1cmItb3ZlcmZsb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1ibHVyYi5vZmZpY2lhbHMtY2FyZC5ibHVyYi1vdmVyZmxvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmludHJvIC5zZWN0aW9uLWJsdXJiLmJsdXJiLW92ZXJmbG93IHtcclxuICBtaW4taGVpZ2h0OiA0NjRweDtcclxufVxyXG5cclxuLmJyaWVmLWludHJvIC5zZWN0aW9uLWJsdXJiIHtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi13cmFwcGVyLmxpdmUtaW1hZ2UgLnNlY3Rpb24tYmx1cmIge1xyXG4gIC8vIHdpZHRoOiAyNzdweDtcclxuICAvLyBtaW4taGVpZ2h0OiAxODBweDtcclxuICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW1nLmxpdmUtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xyXG59XHJcblxyXG5cclxuLnNlY3Rpb24td3JhcHBlci5saXZlLWltYWdlIC5ibHVyYi1pbWcge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5ibHVyYi1pbWcgLmJsdXJiLXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogNHB4IDE0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXdyYXBwZXIubGl2ZS1pbWFnZSAuYmx1cmItaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXdyYXBwZXIgLmxpdmUtaXRlbS13cmFwcGVyIC5saXZlLWltZy1pdGVtIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5icmllZi1pbnRybyAuc2VjdGlvbi13cmFwcGVyLmxpdmUtaW1hZ2UgLnNlY3Rpb24tYmx1cmIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5icmllZi1pbnRybyAuc2VjdGlvbi13cmFwcGVyLmxpdmUtaW1hZ2UgLmxpdmUtaXRlbS13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5icmllZi1pbnRybyAuc2VjdGlvbi13cmFwcGVyLmxpdmUtaW1hZ2UgLmxpdmUtaXRlbS13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uYnJpZWYtaW50cm8gLnNlY3Rpb24td3JhcHBlci5saXZlLWltYWdlIC5saXZlLWl0ZW0td3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoOTUsIDk1LCA5NSwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uYnJpZWYtaW50cm8gLnNlY3Rpb24td3JhcHBlci5saXZlLWltYWdlIC5saXZlLWl0ZW0td3JhcHBlciB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uYnJpZWYtaW50cm8gLnNlY3Rpb24td3JhcHBlci5saXZlLWltYWdlIC5saXZlLWl0ZW0td3JhcHBlciAubGl2ZS1pbWctaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjRweDtcclxufVxyXG5cclxuLmJyaWVmLWludHJvIC5zZWN0aW9uLWJsdXJiLmludHJvLWRlc2Mge1xyXG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG59XHJcblxyXG4uc2VjdGlvbi1ibHVyYi5pbnRyby1kZXNjIC5ibHVyYi1kZXRhaWwgcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlY3Rpb24tYmx1cmIuaW50cm8tZGVzYyAuYmx1cmItZGV0YWlsIHA6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAxMDAlKTtcclxufVxyXG5cclxuYS5yZWFkLW1vcmUtY3RhIHtcclxuICBjb2xvcjogIzIwNTZBRjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuYS5yZWFkLW1vcmUtY3RhOmhvdmVyIHtcclxuICBjb2xvcjogI0FGMjAzMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIG1hcnF1ZWUgc3RhcnQgKi9cclxuLm1hcnF1ZWUge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcblxyXG4ubWFycXVlZSAubWFycXVlZS1oZWFkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNhZjIwMzI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tYXJxdWVlIHAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIFN0YXJ0aW5nIHBvc2l0aW9uICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIC8qIEFwcGx5IGFuaW1hdGlvbiB0byB0aGlzIGVsZW1lbnQgKi9cclxuICBhbmltYXRpb246IHNjcm9sbC1sZWZ0IDYwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qIE1vdmUgaXQgKGRlZmluZSB0aGUgYW5pbWF0aW9uKSAqL1xyXG5Aa2V5ZnJhbWVzIHNjcm9sbC1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBtYXJxdWVlIGNsb3NlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5zZWN0aW9uLXdyYXBwZXIubGl2ZS1pbWFnZSAuYmx1cmItaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi13cmFwcGVyLmxpdmUtaW1hZ2UgLmJsdXJiLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFycXVlZSBwIHtcclxuICAgIGFuaW1hdGlvbjogc2Nyb2xsLWxlZnQgNDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-service */ "./src/app/index/index-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.newsNotices = [];
        this.welcome = [];
        this.officials = [];
        this.applicationFormat = [];
        this.governmentServices = [];
        this.planProjects = [];
        this.links = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.service.getNewsNotices().subscribe(function (data) {
            _this.newsNotices = data;
        });
        this.service.getWelcome().subscribe(function (data) {
            _this.welcome = data;
        });
        this.service.getOfficials().subscribe(function (data) {
            _this.officials = data;
        });
        this.service.getApplicationFormat().subscribe(function (data) {
            _this.applicationFormat = data;
        });
        this.service.getEgovernmentServices().subscribe(function (data) {
            _this.governmentServices = data;
        });
        this.service.getPlanAndProjects().subscribe(function (data) {
            _this.planProjects = data;
        });
        this.service.getLinks().subscribe(function (data) {
            _this.links = data;
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.displayNews = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/news-notice-detail', id]);
    };
    IndexComponent.prototype.displayActLaw = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/act-law', id]);
    };
    IndexComponent.prototype.displayEgovServices = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/egov-service', id]);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            providers: [_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"]],
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/local-act-law-and-directives.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Local Act Law and Directives Section Start -->\n\n<section class=\"local-law-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Local Act, Law and Directives\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-6 col-md-6\" *ngFor=\"let data of localact\">\n                <div class=\"blurb-title\">\n                  {{ data.titleInEnglish }}\n                </div>\n                <div class=\"blurb-detail\">\n                  <p [innerHTML]=\"data.descriptionInEnglish\"></p>\n                </div>\n                <p> Link:\n                  <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\">\n                    {{ data.titleInEnglish }}\n                  </a>\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Local Act Law and Directives Section Closed -->"

/***/ }),

/***/ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/local-act-law-and-directives.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsLWFjdC1sYXctYW5kLWRpcmVjdGl2ZXMvbG9jYWwtYWN0LWxhdy1hbmQtZGlyZWN0aXZlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LocalActLawAndDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalActLawAndDirectivesComponent", function() { return LocalActLawAndDirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _localact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localact-service */ "./src/app/local-act-law-and-directives/localact-service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalActLawAndDirectivesComponent = /** @class */ (function () {
    function LocalActLawAndDirectivesComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.localact = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.service.getLocalAct().subscribe(function (data) {
            _this.localact = data;
        });
    }
    LocalActLawAndDirectivesComponent.prototype.ngOnInit = function () {
    };
    LocalActLawAndDirectivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-act-law-and-directives',
            template: __webpack_require__(/*! ./local-act-law-and-directives.component.html */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.html"),
            providers: [_localact_service__WEBPACK_IMPORTED_MODULE_2__["LocalactService"]],
            styles: [__webpack_require__(/*! ./local-act-law-and-directives.component.scss */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _localact_service__WEBPACK_IMPORTED_MODULE_2__["LocalactService"]])
    ], LocalActLawAndDirectivesComponent);
    return LocalActLawAndDirectivesComponent;
}());



/***/ }),

/***/ "./src/app/local-act-law-and-directives/localact-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/localact-service.ts ***!
  \******************************************************************/
/*! exports provided: LocalactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalactService", function() { return LocalactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalactService = /** @class */ (function () {
    function LocalactService(http) {
        this.http = http;
    }
    LocalactService.prototype.getLocalAct = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/local-act');
    };
    LocalactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocalactService);
    return LocalactService;
}());



/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"organization-structure-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Village\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\">\n              <div class=\"img-wrapper\">\n                <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"brief-img\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/media/media.component.scss":
/*!********************************************!*\
  !*** ./src/app/media/media.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaComponent = /** @class */ (function () {
    function MediaComponent(route) {
        this.route = route;
    }
    MediaComponent.prototype.ngOnInit = function () {
        var image = this.route.snapshot.queryParams["image"];
        console.log(image);
    };
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/media/media.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/mountain/mountain-service.ts":
/*!**********************************************!*\
  !*** ./src/app/mountain/mountain-service.ts ***!
  \**********************************************/
/*! exports provided: MountainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainService", function() { return MountainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MountainService = /** @class */ (function () {
    function MountainService(http) {
        this.http = http;
    }
    MountainService.prototype.getMountainById = function (mountainId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/mountains/' + mountainId);
    };
    MountainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MountainService);
    return MountainService;
}());



/***/ }),

/***/ "./src/app/mountain/mountain.component.html":
/*!**************************************************!*\
  !*** ./src/app/mountain/mountain.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mountain Section Start -->\n\n<section class=\"organization-structure-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\" *ngFor=\"let data of mountain\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              {{ data.mountainNameInEnglish }}\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\">\n              <div class=\"img-wrapper\">\n                <img [src]=\"environment.url +'/' +data.image\" alt=\"\" class=\"brief-img\">\n              </div>\n              <p [innerHTML]=\"data.descriptionInEnglish\">\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Mountain Section Closed -->"

/***/ }),

/***/ "./src/app/mountain/mountain.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mountain/mountain.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdW50YWluL21vdW50YWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mountain/mountain.component.ts":
/*!************************************************!*\
  !*** ./src/app/mountain/mountain.component.ts ***!
  \************************************************/
/*! exports provided: MountainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainComponent", function() { return MountainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mountain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mountain-service */ "./src/app/mountain/mountain-service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MountainComponent = /** @class */ (function () {
    function MountainComponent(http, service, activatedRoute, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mountain = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getMountainById(id).subscribe(function (data) {
                _this.mountain = data;
            });
        });
    }
    MountainComponent.prototype.ngOnInit = function () {
    };
    MountainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-everest',
            template: __webpack_require__(/*! ./mountain.component.html */ "./src/app/mountain/mountain.component.html"),
            providers: [_mountain_service__WEBPACK_IMPORTED_MODULE_3__["MountainService"]],
            styles: [__webpack_require__(/*! ./mountain.component.scss */ "./src/app/mountain/mountain.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _mountain_service__WEBPACK_IMPORTED_MODULE_3__["MountainService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MountainComponent);
    return MountainComponent;
}());



/***/ }),

/***/ "./src/app/news-notice-detail/news-notice-detail-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/news-notice-detail/news-notice-detail-service.ts ***!
  \******************************************************************/
/*! exports provided: NewsNoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsNoticeService", function() { return NewsNoticeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsNoticeService = /** @class */ (function () {
    function NewsNoticeService(http) {
        this.http = http;
    }
    NewsNoticeService.prototype.getNewsById = function (newsId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/news-notices/' + newsId);
    };
    NewsNoticeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsNoticeService);
    return NewsNoticeService;
}());



/***/ }),

/***/ "./src/app/news-notice-detail/news-notice-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/news-notice-detail/news-notice-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- news-notice-detail Section Start -->\n\n<section class=\"brief-intro-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\" *ngFor=\"let data of news\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              <p>{{ data.titleInEnglish }}</p>\n              <div class=\"blurb-duration\">\n                <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                <span> {{ data.updatedOn }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"img-wrapper\">\n              <img [src]=\"environment.url +'/' +data.image\" alt=\"\" class=\"brief-img\">\n            </div>\n            <div class=\"blurb-detail\">\n              <p [innerHTML]=\"data.descriptionInEnglish\">\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- news-notice-detail Section Closed -->"

/***/ }),

/***/ "./src/app/news-notice-detail/news-notice-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/news-notice-detail/news-notice-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Mtbm90aWNlLWRldGFpbC9uZXdzLW5vdGljZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/news-notice-detail/news-notice-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/news-notice-detail/news-notice-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: NewsNoticeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsNoticeDetailComponent", function() { return NewsNoticeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_notice_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-notice-detail-service */ "./src/app/news-notice-detail/news-notice-detail-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsNoticeDetailComponent = /** @class */ (function () {
    function NewsNoticeDetailComponent(http, service, activatedRoute, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.news = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getNewsById(id).subscribe(function (data) {
                _this.news = data;
            });
        });
    }
    NewsNoticeDetailComponent.prototype.ngOnInit = function () {
    };
    NewsNoticeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-notice-detail',
            template: __webpack_require__(/*! ./news-notice-detail.component.html */ "./src/app/news-notice-detail/news-notice-detail.component.html"),
            providers: [_news_notice_detail_service__WEBPACK_IMPORTED_MODULE_1__["NewsNoticeService"]],
            styles: [__webpack_require__(/*! ./news-notice-detail.component.scss */ "./src/app/news-notice-detail/news-notice-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _news_notice_detail_service__WEBPACK_IMPORTED_MODULE_1__["NewsNoticeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewsNoticeDetailComponent);
    return NewsNoticeDetailComponent;
}());



/***/ }),

/***/ "./src/app/organization-structure/organization-structure.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Organization Structure Section Start -->\n\n<section class=\"organization-structure-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngFor=\"let data of organizationStructure\">\n              {{ data.titleInNepali }}\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\" *ngFor=\"let data of organizationStructure\">\n              <p>\n                {{ data.descriptionInEnglish }}\n              </p>\n              <div class=\"img-wrapper\">\n                <img [src]=\"'http://localhost:8000/' +data.image\" alt=\"\" class=\"brief-img\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Organization Structure Section Closed -->\n"

/***/ }),

/***/ "./src/app/organization-structure/organization-structure.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1zdHJ1Y3R1cmUvb3JnYW5pemF0aW9uLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/organization-structure/organization-structure.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrganizationStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationStructureComponent", function() { return OrganizationStructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _organization_structure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-structure.service */ "./src/app/organization-structure/organization-structure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizationStructureComponent = /** @class */ (function () {
    function OrganizationStructureComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.organizationStructure = [];
        this.service.getOrganizationStructure().subscribe(function (data) {
            _this.organizationStructure = data;
        });
    }
    OrganizationStructureComponent.prototype.ngOnInit = function () {
    };
    OrganizationStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-structure',
            template: __webpack_require__(/*! ./organization-structure.component.html */ "./src/app/organization-structure/organization-structure.component.html"),
            providers: [_organization_structure_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationStructureService"]],
            styles: [__webpack_require__(/*! ./organization-structure.component.scss */ "./src/app/organization-structure/organization-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _organization_structure_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationStructureService"]])
    ], OrganizationStructureComponent);
    return OrganizationStructureComponent;
}());



/***/ }),

/***/ "./src/app/organization-structure/organization-structure.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.service.ts ***!
  \**************************************************************************/
/*! exports provided: OrganizationStructureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationStructureService", function() { return OrganizationStructureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizationStructureService = /** @class */ (function () {
    function OrganizationStructureService(http) {
        this.http = http;
    }
    OrganizationStructureService.prototype.getOrganizationStructure = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/organization-structure');
    };
    OrganizationStructureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrganizationStructureService);
    return OrganizationStructureService;
}());



/***/ }),

/***/ "./src/app/password-and-visa/passport-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/password-and-visa/passport-service.ts ***!
  \*******************************************************/
/*! exports provided: PassportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportService", function() { return PassportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassportService = /** @class */ (function () {
    function PassportService(http) {
        this.http = http;
    }
    PassportService.prototype.getPassport = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/passport-visa');
    };
    PassportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PassportService);
    return PassportService;
}());



/***/ }),

/***/ "./src/app/password-and-visa/password-and-visa.component.html":
/*!********************************************************************!*\
  !*** ./src/app/password-and-visa/password-and-visa.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Passport and Visa Section Start -->\n\n<section class=\"passport-visa-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Passport and Visa\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-card\">\n              <div class=\"blurb-detail\">\n                <p *ngFor=\"let data of passport\">\n                  {{ data.descriptionInEnglish }}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Passport and Visa Section Closed -->\n"

/***/ }),

/***/ "./src/app/password-and-visa/password-and-visa.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/password-and-visa/password-and-visa.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLWFuZC12aXNhL3Bhc3N3b3JkLWFuZC12aXNhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/password-and-visa/password-and-visa.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/password-and-visa/password-and-visa.component.ts ***!
  \******************************************************************/
/*! exports provided: PasswordAndVisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordAndVisaComponent", function() { return PasswordAndVisaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _passport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passport-service */ "./src/app/password-and-visa/passport-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordAndVisaComponent = /** @class */ (function () {
    function PasswordAndVisaComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.passport = [];
        this.service.getPassport().subscribe(function (data) {
            _this.passport = data;
        });
    }
    PasswordAndVisaComponent.prototype.ngOnInit = function () {
    };
    PasswordAndVisaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-and-visa',
            template: __webpack_require__(/*! ./password-and-visa.component.html */ "./src/app/password-and-visa/password-and-visa.component.html"),
            providers: [_passport_service__WEBPACK_IMPORTED_MODULE_2__["PassportService"]],
            styles: [__webpack_require__(/*! ./password-and-visa.component.scss */ "./src/app/password-and-visa/password-and-visa.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _passport_service__WEBPACK_IMPORTED_MODULE_2__["PassportService"]])
    ], PasswordAndVisaComponent);
    return PasswordAndVisaComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- reports Section Start -->\n\n<section class=\"vital-registration-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Reports\n            </div>\n          </div>\n          <div class=\"section-blurb vital-registration-links\">\n            <div class=\"blurb-detail\">\n              <p>\n              </p>\n              <ol class=\"list-style-type\">\n                <li>\n                  <a href=\"#\" target=\"_blank\">Monitoring Report</a>\n                </li>\n                <li>\n                  <a href=\"#\" target=\"_blank\">Annual Report</a>\n                </li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- reports Section Closed -->\n"

/***/ }),

/***/ "./src/app/reports/reports.component.scss":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Information for Tourists Section Start -->\n\n<section class=\"tourist-information-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngFor=\"let data of travelAndTourism\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              {{ data.titleInEnglish }}\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"section-wrapper\">\n              <div class=\"img-wrapper\">\n                <img [src]=\"environment.url +'/' +data?.file\" alt=\"\" class=\"brief-img\">\n              </div>\n            </div>\n            <div class=\"blurb-card\">\n              <div class=\"blurb-detail\">\n                <p [innerHTML]=\"data.descriptionInEnglish\">\n                </p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Information for Tourists Section Closed -->"

/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC1hbmQtdG91cmlzbS1pbmZvcm1hdGlvbi90cmF2ZWwtYW5kLXRvdXJpc20taW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TravelAndTourismInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAndTourismInformationComponent", function() { return TravelAndTourismInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel-and-tourism-information.service */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelAndTourismInformationComponent = /** @class */ (function () {
    function TravelAndTourismInformationComponent(http, service, activatedRoute, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.travelAndTourism = [];
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getTravelAndTourismById(id).subscribe(function (data) {
                _this.travelAndTourism = data;
            });
        });
    }
    TravelAndTourismInformationComponent.prototype.ngOnInit = function () {
    };
    TravelAndTourismInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-and-tourism-information',
            template: __webpack_require__(/*! ./travel-and-tourism-information.component.html */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.html"),
            providers: [_travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_2__["TouristInformationService"]],
            styles: [__webpack_require__(/*! ./travel-and-tourism-information.component.scss */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_2__["TouristInformationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TravelAndTourismInformationComponent);
    return TravelAndTourismInformationComponent;
}());



/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts ***!
  \******************************************************************************************/
/*! exports provided: TouristInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristInformationService", function() { return TouristInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TouristInformationService = /** @class */ (function () {
    function TouristInformationService(http) {
        this.http = http;
    }
    TouristInformationService.prototype.getTravelAndTourismById = function (travelAndTourismId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/travel-and-tourism/' + travelAndTourismId);
    };
    TouristInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TouristInformationService);
    return TouristInformationService;
}());



/***/ }),

/***/ "./src/app/trekking/trekking-service.ts":
/*!**********************************************!*\
  !*** ./src/app/trekking/trekking-service.ts ***!
  \**********************************************/
/*! exports provided: TrekkingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekkingService", function() { return TrekkingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrekkingService = /** @class */ (function () {
    function TrekkingService(http) {
        this.http = http;
    }
    TrekkingService.prototype.getTrekking = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/trekking');
    };
    TrekkingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrekkingService);
    return TrekkingService;
}());



/***/ }),

/***/ "./src/app/trekking/trekking.component.html":
/*!**************************************************!*\
  !*** ./src/app/trekking/trekking.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Trekking Section Start -->\n\n<section class=\"trekking-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Trekking\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\" *ngFor=\"let data of trekking\">\n              <p>\n                {{ data.descriptionInEnglish }}\n              </p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Trekking Section Closed -->\n"

/***/ }),

/***/ "./src/app/trekking/trekking.component.scss":
/*!**************************************************!*\
  !*** ./src/app/trekking/trekking.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWtraW5nL3RyZWtraW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/trekking/trekking.component.ts":
/*!************************************************!*\
  !*** ./src/app/trekking/trekking.component.ts ***!
  \************************************************/
/*! exports provided: TrekkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekkingComponent", function() { return TrekkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trekking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trekking-service */ "./src/app/trekking/trekking-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrekkingComponent = /** @class */ (function () {
    function TrekkingComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.trekking = [];
        this.service.getTrekking().subscribe(function (data) {
            _this.trekking = data;
        });
    }
    TrekkingComponent.prototype.ngOnInit = function () {
    };
    TrekkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trekking',
            template: __webpack_require__(/*! ./trekking.component.html */ "./src/app/trekking/trekking.component.html"),
            providers: [_trekking_service__WEBPACK_IMPORTED_MODULE_2__["TrekkingService"]],
            styles: [__webpack_require__(/*! ./trekking.component.scss */ "./src/app/trekking/trekking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _trekking_service__WEBPACK_IMPORTED_MODULE_2__["TrekkingService"]])
    ], TrekkingComponent);
    return TrekkingComponent;
}());



/***/ }),

/***/ "./src/app/village-profile/village-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/village-profile/village-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Village Profile Section Start -->\n\n<section class=\"village-profile-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 m-b-20\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngFor=\"let data of villageProfile\">\n              {{ data.titleInEnglish }}\n            </div>\n          </div>\n          <div class=\"section-blurb --sm-blurb village-profile-links\">\n            <div class=\"blurb-detail\">\n              <p *ngFor=\"let data of villageProfile\" [innerHTML]=\"data.descriptionInEnglish\">\n\n              </p>\n              <ul>\n                <li *ngFor=\"let data of villages\">\n                  <a href=\"#\"\n                    (click)=\"displayVillageDetails($event, data.image, data.villageNameInEnglish, data.descriptionInEnglish)\">\n                    {{ data.villageNameInEnglish }} </a>\n                </li>\n              </ul>\n              <!-- <div *ngIf=\"isVillageDetailsOpen\">\n                <h1 class=\"text-center\"> {{ villageNameInEnglish }} </h1>\n                <img src=\"../../assets/img/everest.jpg\" />\n                <p> {{ descriptionInEnglish }} </p>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 m-b-20\">\n        <div class=\"section-wrapper overflow-shadow slide-top\">\n          <div class=\"section-blurb blurb-overflow village-profile\">\n            <div class=\"blurb-detail\">\n              <div *ngIf=\"isVillageDetailsOpen\">\n                <h1> {{ villageNameInEnglish }} </h1>\n                <img [src]=\"environment.url + '/'+image\" />\n                <!-- <img class=\"village-img\" [src]=\"environment.url +'/' +data.image\" /> -->\n                <p [innerHTML]=\"descriptionInEnglish\"> </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Village Profile Section Closed -->"

/***/ }),

/***/ "./src/app/village-profile/village-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/village-profile/village-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbGxhZ2UtcHJvZmlsZS92aWxsYWdlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/village-profile/village-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/village-profile/village-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: VillageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageProfileComponent", function() { return VillageProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _village_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./village-profile.service */ "./src/app/village-profile/village-profile.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VillageProfileComponent = /** @class */ (function () {
    function VillageProfileComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.villageProfile = [];
        this.villages = [];
        this.image = "";
        this.villageNameInEnglish = "";
        this.descriptionInEnglish = "";
        this.isVillageDetailsOpen = false;
        this.service.getVillageProfile().subscribe(function (data) {
            _this.villageProfile = data;
        });
        this.service.getVillages().subscribe(function (data) {
            _this.villages = data;
        });
    }
    VillageProfileComponent.prototype.ngOnInit = function () {
    };
    VillageProfileComponent.prototype.displayVillageDetails = function (event, image, villageNameInEnglish, descriptionInEnglish) {
        this.villageNameInEnglish = villageNameInEnglish;
        this.image = image;
        this.descriptionInEnglish = descriptionInEnglish;
        this.isVillageDetailsOpen = true;
        event.preventDefault();
    };
    VillageProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-village-profile',
            template: __webpack_require__(/*! ./village-profile.component.html */ "./src/app/village-profile/village-profile.component.html"),
            providers: [_village_profile_service__WEBPACK_IMPORTED_MODULE_2__["VillageProfileService"]],
            styles: [__webpack_require__(/*! ./village-profile.component.scss */ "./src/app/village-profile/village-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _village_profile_service__WEBPACK_IMPORTED_MODULE_2__["VillageProfileService"]])
    ], VillageProfileComponent);
    return VillageProfileComponent;
}());



/***/ }),

/***/ "./src/app/village-profile/village-profile.service.ts":
/*!************************************************************!*\
  !*** ./src/app/village-profile/village-profile.service.ts ***!
  \************************************************************/
/*! exports provided: VillageProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageProfileService", function() { return VillageProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VillageProfileService = /** @class */ (function () {
    function VillageProfileService(http) {
        this.http = http;
    }
    VillageProfileService.prototype.getVillageProfile = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/village-profile');
    };
    VillageProfileService.prototype.getVillages = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/villages');
    };
    VillageProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VillageProfileService);
    return VillageProfileService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    url: 'https://khumbuwebapi.paisamanager.com'
};


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\khumbu-dev-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map