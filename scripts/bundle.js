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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by Administrator on 3/14/2016.
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        main.hideAndRevealPIN();
	        main.buttonHandler();
	    }

	    _createClass(main, null, [{
	        key: "hideAndRevealPIN",
	        value: function hideAndRevealPIN(cardNumberCharacters) {
	            document.getElementById("PIN").style.display = "none";
	            if (cardNumberCharacters == 3) {
	                document.getElementById("PIN").style.display = "block";
	                main.PINHandler();
	            }
	        }
	    }, {
	        key: "buttonHandler",
	        value: function buttonHandler() {
	            var cardNumberCharacters = 0;
	            document.getElementById("one").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    main.insertPIN();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	        }
	    }, {
	        key: "insertPIN",
	        value: function insertPIN() {
	            var cardNumber = document.getElementById('cardNumber').innerHTML;
	            document.getElementById('cardNumber').innerHTML = ">***";
	            document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN number associated with this card into the keypad.";
	        }
	    }, {
	        key: "PINHandler",
	        value: function PINHandler() {
	            var PINdigits = 0;
	            document.getElementById("one").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
	                }
	                PINdigits++;
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
	                }
	                PINdigits++;
	            }, false);
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);