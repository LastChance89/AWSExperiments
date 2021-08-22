(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/main/webapp/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ksmit\Documents\Eclipse_Work\AWS_experiments\src\main\webapp\main.ts */"WtjW");


/***/ }),

/***/ "5r+R":
/*!************************************************!*\
  !*** ./src/main/webapp/app/s3/s3.component.ts ***!
  \************************************************/
/*! exports provided: S3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3Component", function() { return S3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "zBE0");
/* harmony import */ var _service_s3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/s3.service */ "EQ2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "bAJt");
/* harmony import */ var _s3_objects_s3_objects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s3-objects/s3-objects.component */ "lkLQ");




function S3Component_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function S3Component_tr_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const bucket_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectBucket(bucket_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bucket_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bucket_r1.name);
} }
class S3Component {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    ngOnInit() {
        this.s3Service.getBuckets().subscribe(result => {
            console.log(this.buckets);
            this.buckets = result;
        }, error => {
            //Build error message
            console.log("Error: ", error);
        });
    }
    selectBucket(bucketName) {
        this.selectedBucket = bucketName;
        this.s3Service.getBucketContents(bucketName).subscribe(result => {
            console.log(result);
            this.bucketObjects = result;
        }, error => {
            console.log("ERROR: ", error);
        });
        console.log("BLEH");
    }
}
S3Component.ɵfac = function S3Component_Factory(t) { return new (t || S3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_s3_service__WEBPACK_IMPORTED_MODULE_1__["S3Service"])); };
S3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: S3Component, selectors: [["app-s3"]], decls: 6, vars: 3, consts: [[1, "bucket-container"], [4, "ngFor", "ngForOf"], [3, "selectedBucket", "bucketObjects"], ["href", "javascript:void(0);", 3, "click"]], template: function S3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " select a bucket below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, S3Component_tr_3_Template, 3, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s3-objects", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedBucket", ctx.selectedBucket)("bucketObjects", ctx.bucketObjects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _s3_objects_s3_objects_component__WEBPACK_IMPORTED_MODULE_3__["S3ObjectsComponent"]], styles: [".bucket-container[_ngcontent-%COMP%]{\r\n    margin-bottom: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInMzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiczMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWNrZXQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "B93Q":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/popup-modal/message/popup-message/popup-message.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PopupMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMessageComponent", function() { return PopupMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "zBE0");

class PopupMessageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopupMessageComponent.ɵfac = function PopupMessageComponent_Factory(t) { return new (t || PopupMessageComponent)(); };
PopupMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupMessageComponent, selectors: [["app-popup-message"]], decls: 2, vars: 0, template: function PopupMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "popup-message works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC1tZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "EQ2v":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/service/s3.service.ts ***!
  \***************************************************/
/*! exports provided: S3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3Service", function() { return S3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "zBE0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "E+8w");


class S3Service {
    constructor(http) {
        this.http = http;
    }
    getBuckets() {
        return this.http.post('/s3/listBuckets', '');
    }
    getBucketContents(bucketName) {
        return this.http.post('/s3/getBucketContents', bucketName);
    }
    getObjectContents(bucketName, objectName) {
        let payload = { "bucketName": bucketName, "objectName": objectName };
        return this.http.post('/s3/getBucketObject', payload);
    }
}
S3Service.ɵfac = function S3Service_Factory(t) { return new (t || S3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
S3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: S3Service, factory: S3Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FArU":
/*!*************************************************!*\
  !*** ./src/main/webapp/app/model/popup-type.ts ***!
  \*************************************************/
/*! exports provided: PopupType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupType", function() { return PopupType; });
var PopupType;
(function (PopupType) {
    PopupType[PopupType["FILE"] = 0] = "FILE";
    PopupType[PopupType["MESSAGE"] = 1] = "MESSAGE";
    PopupType[PopupType["SHOWS3OBJECT"] = 2] = "SHOWS3OBJECT";
})(PopupType || (PopupType = {}));


/***/ }),

/***/ "WtjW":
/*!*********************************!*\
  !*** ./src/main/webapp/main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "pje4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "zBE0");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "oZJK");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "XSkM");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "XSkM":
/*!*****************************************************!*\
  !*** ./src/main/webapp/environments/environment.ts ***!
  \*****************************************************/
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

/***/ "ZfXR":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/popup-modal/popup-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: PopupModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModalComponent", function() { return PopupModalComponent; });
/* harmony import */ var _model_popup_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/popup-type */ "FArU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "zBE0");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "bAJt");




function PopupModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PopupModalComponent_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.uploadFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PopupModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.filePop = _model_popup_type__WEBPACK_IMPORTED_MODULE_0__["PopupType"].FILE;
        this.messagePop = _model_popup_type__WEBPACK_IMPORTED_MODULE_0__["PopupType"].MESSAGE;
        this.showS3Pop = _model_popup_type__WEBPACK_IMPORTED_MODULE_0__["PopupType"].SHOWS3OBJECT;
    }
    ngOnInit() {
    }
    uploadFiles(e) {
        e.preventDefault();
        let files = e.target.files;
        console.log(files);
    }
}
PopupModalComponent.ɵfac = function PopupModalComponent_Factory(t) { return new (t || PopupModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
PopupModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupModalComponent, selectors: [["popup-modal"]], inputs: { tpye: "tpye" }, decls: 3, vars: 2, consts: [[1, "modal-header"], [1, "modal-body", 3, "ngSwitch"], [4, "ngSwitchCase"], ["id", "fileUpload", "type", "file", "multiple", "", 3, "change"]], template: function PopupModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PopupModalComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.tpye);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.filePop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dKwU":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/popup-modal/file/popup-file/popup-file.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PopupFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFileComponent", function() { return PopupFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "zBE0");

class PopupFileComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopupFileComponent.ɵfac = function PopupFileComponent_Factory(t) { return new (t || PopupFileComponent)(); };
PopupFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupFileComponent, selectors: [["app-popup-file"]], decls: 2, vars: 0, template: function PopupFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "popup-file works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC1maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "dkpf":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "MvhY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "zBE0");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lLmp":
/*!**********************************************!*\
  !*** ./src/main/webapp/app/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "zBE0");
/* harmony import */ var _s3_s3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./s3/s3.component */ "5r+R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "MvhY");



class AppComponent {
    constructor() {
        this.title = 'webapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AWS Utility. V1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-s3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_s3_s3_component__WEBPACK_IMPORTED_MODULE_1__["S3Component"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "lkLQ":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/s3/s3-objects/s3-objects.component.ts ***!
  \*******************************************************************/
/*! exports provided: S3ObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3ObjectsComponent", function() { return S3ObjectsComponent; });
/* harmony import */ var _model_popup_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/popup-type */ "FArU");
/* harmony import */ var _popup_modal_popup_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../popup-modal/popup-modal.component */ "ZfXR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "zBE0");
/* harmony import */ var _service_s3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/s3.service */ "EQ2v");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "bAJt");






function S3ObjectsComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function S3ObjectsComponent_tr_6_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const bucketObject_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.getBucketObject(bucketObject_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bucketObject_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bucketObject_r1.key);
} }
class S3ObjectsComponent {
    constructor(s3, ngbModal) {
        this.s3 = s3;
        this.ngbModal = ngbModal;
        this.disabled = true;
        this.options = {
            backdrop: 'static',
            centered: true,
            size: "dialog-centered"
        };
    }
    ngOnInit() {
    }
    getBucketObject(objectName) {
        this.s3.getObjectContents(this.selectedBucket, objectName).subscribe(result => {
            console.log(result);
            this.objectContents = result;
        }, error => {
            console.log(error);
        });
    }
    displayModal(e) {
        e.preventDefault;
        const modelRef = this.ngbModal.open(_popup_modal_popup_modal_component__WEBPACK_IMPORTED_MODULE_1__["PopupModalComponent"], this.options);
        modelRef.componentInstance.tpye = _model_popup_type__WEBPACK_IMPORTED_MODULE_0__["PopupType"].FILE;
    }
}
S3ObjectsComponent.ɵfac = function S3ObjectsComponent_Factory(t) { return new (t || S3ObjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_s3_service__WEBPACK_IMPORTED_MODULE_3__["S3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
S3ObjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: S3ObjectsComponent, selectors: [["s3-objects"]], inputs: { selectedBucket: "selectedBucket", bucketObjects: "bucketObjects" }, outputs: { objectContents: "objectContents" }, decls: 7, vars: 2, consts: [[1, "controls-container"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled"], [1, "object-container"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click"]], template: function S3ObjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function S3ObjectsComponent_Template_button_click_1_listener($event) { return ctx.displayModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Upload Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, S3ObjectsComponent_tr_6_Template, 4, 1, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bucketObjects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".object-container[_ngcontent-%COMP%]{\r\n    border: solid;\r\n    border-width: initial; \r\n    height: 10em;\r\n    margin-top: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInMzLW9iamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoiczMtb2JqZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9iamVjdC1jb250YWluZXJ7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBpbml0aWFsOyBcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "oZJK":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "E+8w");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "pje4");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "dkpf");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "lLmp");
/* harmony import */ var _s3_s3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./s3/s3.component */ "5r+R");
/* harmony import */ var _service_s3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/s3.service */ "EQ2v");
/* harmony import */ var _s3_s3_objects_s3_objects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./s3/s3-objects/s3-objects.component */ "lkLQ");
/* harmony import */ var _popup_modal_popup_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup-modal/popup-modal.component */ "ZfXR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _popup_modal_file_popup_file_popup_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup-modal/file/popup-file/popup-file.component */ "dKwU");
/* harmony import */ var _popup_modal_message_popup_message_popup_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popup-modal/message/popup-message/popup-message.component */ "B93Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "zBE0");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_service_s3_service__WEBPACK_IMPORTED_MODULE_5__["S3Service"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _s3_s3_component__WEBPACK_IMPORTED_MODULE_4__["S3Component"],
        _s3_s3_objects_s3_objects_component__WEBPACK_IMPORTED_MODULE_6__["S3ObjectsComponent"],
        _popup_modal_popup_modal_component__WEBPACK_IMPORTED_MODULE_7__["PopupModalComponent"],
        _popup_modal_file_popup_file_popup_file_component__WEBPACK_IMPORTED_MODULE_9__["PopupFileComponent"],
        _popup_modal_message_popup_message_popup_message_component__WEBPACK_IMPORTED_MODULE_10__["PopupMessageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map