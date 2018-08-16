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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-test1></app-test1>\n"

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
        this.title = 'project-test';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componenets_test1_test1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componenets/test1/test1.component */ "./src/app/componenets/test1/test1.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _componenets_test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componenets/test1/dataService.ts":
/*!**************************************************!*\
  !*** ./src/app/componenets/test1/dataService.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
var DataService = /** @class */ (function () {
    function DataService() {
        this.dataset = [
            { id: "1",
                title: "title1",
                subtitle: "subtitle1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?",
                imgUrl: "../../../assets/sample.png",
                showImageText: "Show Image",
                toggleImage: false
            },
            { id: '2',
                title: "title2",
                subtitle: "subtitle2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?",
                imgUrl: "../../../assets/sample.png",
                showImageText: "Show Image",
                toggleImage: false
            },
            { id: '3',
                title: "title3",
                subtitle: "subtitle3",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate",
                imgUrl: "../../../assets/sample.png",
                showImageText: "Show Image",
                toggleImage: false
            }
        ];
    }
    DataService.prototype.getDataset = function () {
        return this.dataset;
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/componenets/test1/test1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenets/test1/test1.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componenets/test1/test1.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenets/test1/test1.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .scroll-box{\n    overflow-y: scroll;\n    height:250px;\n    padding:1rem;\n  }\n</style>\n<div class=\"row\">\n\n<div class=\"col-md-4\" *ngFor=\"let data of dataset\">\n <div class=\"card\" >\n  <div class=\"card-header\">{{data.title}}\n      <div class=\"card-subtitle mb-2 text-muted\">{{data.subtitle}}</div>\n  </div>\n  <div class=\"card-body text-center\">\n    <div class=\"scroll-box\" [hidden]=\"data.toggleImage\">{{data.text}}</div>\n    <div style=\"height:250px\" [hidden]=\"!data.toggleImage\">\n    <img src=\"{{data.imgUrl}}\" width=\"150px\" alt=\"\" >\n  </div>\n  </div>\n    <hr>\n  <div class=\"card-item text-center\">\n      <button class=\"btn btn-primary\" (click)=\"toggle(data.id)\">{{data.showImageText}}</button>\n  </div>\n  \n  \n<!-- </div>\n</div>\n<div class=\"col-md-4\">\n <div class=\"card\" >\n  <div class=\"card-header\">Title 2\n      <div class=\"card-subtitle mb-2 text-muted\">subject 2</div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"scroll-box\" [hidden]=\"toggleImage\">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?\n    </div>\n    <div style=\"height:250px\" [hidden]=\"!toggleImage\">\n    <img src=\"../../../assets/sample.png\" width=\"150px\" alt=\"\" >\n  </div>\n  </div>\n    <hr>\n  <div class=\"card-item text-center\">\n      <button class=\"btn btn-primary\" (click)=\"toggle()\">{{showImageText}}</button>\n  </div>\n  \n  \n</div>\n</div>\n<div class=\"col-md-4\">\n <div class=\"card\" >\n  <div class=\"card-header\">Title 2\n      <div class=\"card-subtitle mb-2 text-muted\">subject 2</div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"scroll-box\" [hidden]=\"toggleImage\">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?\n    </div>\n    <div style=\"height:250px\" [hidden]=\"!toggleImage\">\n    <img src=\"../../../assets/sample.png\" width=\"150px\" alt=\"\" >\n  </div>\n  </div>\n    <hr>\n  <div class=\"card-item text-center\">\n      <button class=\"btn btn-primary\" (click)=\"toggle()\">{{showImageText}}</button>\n  </div>\n  \n  \n</div>\n</div>\n -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/componenets/test1/test1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenets/test1/test1.component.ts ***!
  \******************************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataService */ "./src/app/componenets/test1/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Test1Component = /** @class */ (function () {
    // showImageText:string="Show Image";
    // toggleImage:boolean=false;
    /**
     * id:string;
        title:string;
        subtitle:string;
        text:string;
        imgUrl:string;
        toggleImage:boolean;
     */
    function Test1Component() {
        this.dataset = (new _dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]()).getDataset();
    }
    Test1Component.prototype.ngOnInit = function () {
    };
    Test1Component.prototype.toggle = function (id) {
        this.dataset.forEach(function (item) {
            if (item.id == id) {
                //item.toggleImage = !item.toggleImage;
                if (item.showImageText == "Show Image") {
                    item.showImageText = "Show Text";
                    item.toggleImage = true;
                }
                else {
                    item.showImageText = "Show Image";
                    item.toggleImage = false;
                }
            }
        });
        /*
        if (this.showImageText=="Show Image") {
          this.showImageText = "Show Text";
          this.toggleImage = true;
        } else{
          this.showImageText = "Show Image";
          this.toggleImage = false;
        }
          */
    };
    Test1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/componenets/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/componenets/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test1Component);
    return Test1Component;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\UCSC\angular_projects\project-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map