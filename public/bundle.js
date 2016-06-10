/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Hello_1 = __webpack_require__(2);
	console.log(Hello_1.greeting("Anuchit"));
	var contact = new Hello_1.Contact("Anuchit Prasertsang");
	console.log("contact:", contact.getAddress());
	console.log("contact:name:", contact.getName());


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	function greeting(name) {
	    return name;
	}
	exports.greeting = greeting;
	var Contact = (function () {
	    function Contact(name) {
	        this.name = name;
	    }
	    Contact.prototype.getAddress = function () {
	        return "231 moo 9 kalasin";
	    };
	    Contact.prototype.getName = function () {
	        return this.name;
	    };
	    return Contact;
	}());
	exports.Contact = Contact;


/***/ }
/******/ ]);