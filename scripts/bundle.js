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

	        main.getValidNumberCombos();
	        main.hideAndRevealPIN();
	        main.cardNumberHandler();
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
	        key: "cardNumberHandler",
	        value: function cardNumberHandler() {
	            var cardNumberCharacters = 0;
	            document.getElementById("one").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (cardNumberCharacters != 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                }
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (cardNumberCharacters == 3) {
	                    main.insertCardNumber();
	                    main.hideAndRevealPIN(cardNumberCharacters);
	                }
	            }, false);
	        }
	    }, {
	        key: "insertCardNumber",
	        value: function insertCardNumber() {
	            var cardNumber = document.getElementById('cardNumber').innerHTML;
	            document.getElementById('buttonSix').innerHTML = "VI";
	            document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN number associated with this card into the keypad.";
	            console.log(cardNumber);
	        }
	    }, {
	        key: "PINHandler",
	        value: function PINHandler() {
	            var PINdigits = 0;
	            document.getElementById("one").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN2 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN3 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN4 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN5 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN6 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN7 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN8 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN9 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (PINdigits == 0) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
	                    PINdigits++;
	                }
	                if (PINdigits == 1) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    var _PIN10 = document.getElementById('PIN').innerHTML;
	                }
	            }, false);
	        }
	    }, {
	        key: "getValidNumberCombos",
	        value: function getValidNumberCombos() {
	            var request = new XMLHttpRequest();
	            var filepath = "./data/cardnumbers_PINs.csv";
	            request.open("GET", filepath, true);
	            request.send();
	            request.onload = function () {
	                var COLUMNS = 2;
	                var validCombos = [];
	                if (request.readyState === 4 && request.status === 200) {
	                    validCombos = request.responseText.split(/,/);
	                }
	                for (var i = 0; i < validCombos.length; i++) {
	                    console.log(validCombos[i]);
	                }
	            };
	        }
	    }, {
	        key: "validateNumbers",
	        value: function validateNumbers() {
	            for (var i = 0; i < validCombos.length; i++) {
	                if (validCombos[i] == cardNumber && validCombos[i + 2] == PIN) {
	                    var validCombo = true;
	                    console.log(validCombo);
	                }
	            }
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);