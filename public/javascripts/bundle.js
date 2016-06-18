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

	        this.pin = 0;
	        this.cardNumber = 0;
	        this.checkingAccountBalance = 0;
	        this.savingsAccountBalance = 0;
	        this.balances = [];
	        var defaultsSet = false;
	        var exitCalled = false;
	        main.hideAndRevealDivs();
	        main.loadData(exitCalled, defaultsSet);
	    }

	    _createClass(main, null, [{
	        key: 'loadData',
	        value: function loadData(exitCalled, defaultsSet) {
	            var filePath = '../views/data/cardnumbers_PINs.csv';
	            var request = new XMLHttpRequest();
	            request.open("POST", filePath, true);
	            request.setRequestHeader('x-requested-set', 'XMLHttpRequest1');
	            request.send();
	            request.onload = function () {
	                var COLUMNS = 4;
	                var data = void 0,
	                    middleData = void 0,
	                    validCombos = [];
	                if (request.readyState === 4 && request.status === 200) {
	                    data = request.responseText.split(/\n/);
	                }
	                for (var i = 0; i < data.length; i++) {
	                    middleData = data[i].split(/,/);
	                    validCombos[i] = [];
	                    for (var j = 0; j < COLUMNS; j++) {
	                        validCombos[i][j] = middleData[j];
	                    }
	                }
	                for (var _i = 0; _i < validCombos.length; _i++) {
	                    for (var _j = 0; _j < COLUMNS; _j++) {
	                        console.log(validCombos[_i][_j]);
	                    }
	                }
	                return main.cardNumberHandler(validCombos, exitCalled, defaultsSet);
	            };
	        }
	    }, {
	        key: 'cardNumberHandler',
	        value: function cardNumberHandler(validCombos, exitCalled, defaultsSet) {
	            var _this = this;

	            var cardCharacters = 0;
	            document.getElementById("one").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (cardCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
	                    cardCharacters++;
	                }
	                if (cardCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (cardCharacters == 4) {
	                    _this.cardNumber = document.getElementById('cardNumber').innerHTML;
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    document.getElementById('promptCustomer').innerHTML = "Please insert the one-digit PIN associated with this card into the keypad.";
	                    console.log(_this.cardNumber.slice(4, _this.cardNumber.length));
	                    cardCharacters++;
	                    main.hideAndRevealDivs(cardCharacters);
	                    return main.PINHandler(validCombos, cardCharacters, exitCalled, defaultsSet);
	                }
	            }, false);
	        }
	    }, {
	        key: 'hideAndRevealDivs',
	        value: function hideAndRevealDivs(cardCharacters) {
	            if (cardCharacters == 5) {
	                document.getElementById('PIN').style.display = 'block';
	            } else {
	                document.getElementById('displayArea').style.display = 'none';
	                document.getElementById('input').style.display = 'none';
	                document.getElementById('PIN').style.display = 'none';
	            }
	        }
	    }, {
	        key: 'PINHandler',
	        value: function PINHandler(validCombos, cardCharacters, exitCalled, defaultsSet) {
	            var _this2 = this;

	            console.log('cardCharacters=' + cardCharacters);
	            document.getElementById("one").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (cardCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardCharacters++;
	                }
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (cardCharacters == 6) {
	                    _this2.pin = document.getElementById('PIN').innerHTML;
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    cardCharacters++;
	                    return main.validateNumbers(validCombos, exitCalled, defaultsSet);
	                }
	            }, false);
	        }
	    }, {
	        key: 'validateNumbers',
	        value: function validateNumbers(validCombos, exitCalled, defaultsSet) {
	            var _this3 = this;

	            var validCombo = void 0;
	            var ROWS = 2;
	            this.cardNumber = this.cardNumber.slice(4, this.cardNumber.length);
	            this.pin = this.pin.slice(4, this.pin.length);

	            var _loop = function _loop(i) {
	                if (validCombos[i][0] == _this3.cardNumber && validCombos[i][1] == _this3.pin) {
	                    (function () {
	                        validCombo = true;
	                        var XHR = new XMLHttpRequest();
	                        XHR.open('POST', document.url, true);
	                        XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest0');
	                        XHR.send();
	                        XHR.onload = function () {
	                            if (XHR.readyState == 4 && XHR.status == 200) {
	                                console.log('this.defaultsSet = ' + defaultsSet);
	                                if (defaultsSet == false) {
	                                    _this3.checkingAccountBalance = Number(validCombos[i][2]);
	                                    _this3.savingsAccountBalance = Number(validCombos[i][3]);
	                                    defaultsSet = true;
	                                } else {
	                                    _this3.checkingAccountBalance = _this3.balances[2];
	                                    _this3.savingsAccountBalance = _this3.balances[3];
	                                }
	                            }
	                            if (validCombo != true) {
	                                document.getElementById('promptCustomer').innerHTML = "Incorrect Input. Please try again.";
	                                if (exitCalled != true) {
	                                    return main.exitApplication(exitCalled, defaultsSet);
	                                }
	                            } else {
	                                document.getElementById('input').value = _this3.cardNumber + "," + _this3.pin;
	                                return main.selectAccount(exitCalled, defaultsSet);
	                            }
	                        };
	                    })();
	                }
	            };

	            for (var i = 0; i < ROWS; i++) {
	                _loop(i);
	            }
	        }
	    }, {
	        key: 'selectAccount',
	        value: function selectAccount(exitCalled, defaultsSet) {
	            var _this4 = this;

	            var accountType = 0;
	            var isBusy = false;
	            document.getElementById('promptCustomer').innerHTML = "Which account would you like to access at this time?";
	            document.getElementById('buttonSix').innerHTML = "SAVINGS";
	            document.getElementById('buttonThree').innerHTML = "CHECKING";
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (accountType == 0 && isBusy == false) {
	                    accountType = "savings";
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    document.getElementById('buttonThree').innerHTML = "III";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + _this4.savingsAccountBalance + ". Which action would you like to perform?";
	                    return main.performAction(accountType, isBusy, exitCalled, defaultsSet);
	                }
	            }, false);
	            document.getElementById("buttonThree").addEventListener("click", function () {
	                if (accountType == 0 && isBusy == false) {
	                    accountType = "checking";
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    document.getElementById('buttonThree').innerHTML = "III";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + _this4.checkingAccountBalance + ". Which action would you like to perform?";
	                    return main.performAction(accountType, isBusy, exitCalled, defaultsSet);
	                }
	            }, false);
	        }
	    }, {
	        key: 'performAction',
	        value: function performAction(accountType, isBusy, exitCalled, defaultsSet) {
	            var _this5 = this;

	            document.getElementById('buttonSix').innerHTML = "WITHDRAW";
	            document.getElementById('buttonThree').innerHTML = "DEPOSIT";
	            document.getElementById('buttonTwo').innerHTML = "TRANSFER";
	            document.getElementById('buttonFour').innerHTML = "SWITCH ACC.";
	            document.getElementById("buttonFour").addEventListener("click", function () {
	                if (accountType == "checking") {
	                    accountType = "savings";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + _this5.savingsAccountBalance + ". Which action would you like to perform?";
	                } else {
	                    accountType = "checking";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + _this5.checkingAccountBalance + ". Which action would you like to perform?";
	                }
	            }, false);
	            document.getElementById("buttonThree").addEventListener("click", function () {
	                isBusy = true;
	                document.getElementById('buttonTwo').innerHTML = "II";
	                document.getElementById('buttonSix').innerHTML = "VI";
	                document.getElementById('buttonThree').innerHTML = "III";
	                document.getElementById('buttonFour').innerHTML = "IV";
	                return main.performDeposit(accountType);
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                isBusy = true;
	                document.getElementById('buttonTwo').innerHTML = "II";
	                document.getElementById('buttonSix').innerHTML = "VI";
	                document.getElementById('buttonThree').innerHTML = "III";
	                document.getElementById('buttonFour').innerHTML = "IV";
	                return main.performWithdrawal(accountType);
	            }, false);
	            document.getElementById("buttonTwo").addEventListener("click", function () {
	                isBusy = true;
	                document.getElementById('buttonTwo').innerHTML = "II";
	                document.getElementById('buttonSix').innerHTML = "VI";
	                document.getElementById('buttonThree').innerHTML = "III";
	                document.getElementById('buttonFour').innerHTML = "IV";
	                return main.performTransfer(accountType);
	            }, false);
	        }
	    }, {
	        key: 'performDeposit',
	        value: function performDeposit(accountType, exitCalled, defaultsSet) {
	            var _this6 = this;

	            document.getElementById('promptCustomer').innerHTML = "How much money would you like to deposit into your " + accountType + " account?";
	            document.getElementById("displayArea").style.display = "block";
	            document.getElementById("one").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                var moneyDeposited = document.getElementById("displayArea").innerHTML;
	                moneyDeposited = Number(moneyDeposited.slice(4, moneyDeposited.length));
	                if (accountType == "checking") {
	                    _this6.checkingAccountBalance = Number(_this6.checkingAccountBalance) + moneyDeposited;
	                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + _this6.checkingAccountBalance + ". Thank you for using this terminal.";
	                } else {
	                    _this6.savingsAccountBalance = Number(_this6.savingsAccountBalance) + moneyDeposited;
	                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + _this6.savingsAccountBalance + ". Thank you for using this terminal.";
	                }
	                if (exitCalled != true) {
	                    return main.exitApplication(exitCalled, defaultsSet);
	                }
	            }, false);
	        }
	    }, {
	        key: 'performWithdrawal',
	        value: function performWithdrawal(accountType, exitCalled, defaultsSet) {
	            var _this7 = this;

	            document.getElementById('promptCustomer').innerHTML = "How much money would you like to withdraw from your " + accountType + " account?";
	            document.getElementById("displayArea").style.display = "block";
	            document.getElementById("one").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                var moneyWithdrawn = document.getElementById("displayArea").innerHTML;
	                moneyWithdrawn = Number(moneyWithdrawn.slice(4, moneyWithdrawn.length));
	                if (accountType == "checking") {
	                    if (moneyWithdrawn <= _this7.checkingAccountBalance) {
	                        _this7.checkingAccountBalance = Number(_this7.checkingAccountBalance) - moneyWithdrawn;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + _this7.checkingAccountBalance + ". Thank you for using this terminal.";
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
	                    }
	                } else {
	                    if (moneyWithdrawn <= _this7.savingsAccountBalance) {
	                        _this7.savingsAccountBalance = Number(_this7.savingsAccountBalance) - moneyWithdrawn;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + _this7.savingsAccountBalance + ". Thank you for using this terminal.";
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
	                    }
	                }
	                if (exitCalled != true) {
	                    return main.exitApplication(exitCalled, defaultsSet);
	                }
	            }, false);
	        }
	    }, {
	        key: 'performTransfer',
	        value: function performTransfer(accountType, exitCalled, defaultsSet) {
	            var _this8 = this;

	            if (accountType == "checking") {
	                document.getElementById('promptCustomer').innerHTML = "How much money would you like to transfer from your checking account to your savings account?";
	            } else {
	                document.getElementById('promptCustomer').innerHTML = "How much money would you like to transfer from your savings account to your checking account?";
	            }
	            document.getElementById("displayArea").style.display = "block";
	            document.getElementById("one").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                var moneyTransferred = document.getElementById("displayArea").innerHTML;
	                moneyTransferred = Number(moneyTransferred.slice(4, moneyTransferred.length));
	                if (accountType == "checking") {
	                    if (moneyTransferred <= _this8.checkingAccountBalance) {
	                        _this8.checkingAccountBalance = Number(_this8.checkingAccountBalance) - moneyTransferred;
	                        _this8.savingsAccountBalance = Number(_this8.savingsAccountBalance) + moneyTransferred;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + _this8.checkingAccountBalance + ". The balance of your savings account is now $" + _this8.savingsAccountBalance + ".";
	                        if (exitCalled != true) {
	                            return main.exitApplication(exitCalled, defaultsSet);
	                        }
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to transfer that amount. Please try again.";
	                        if (exitCalled != true) {
	                            return main.exitApplication(exitCalled, defaultsSet);
	                        }
	                    }
	                } else {
	                    if (moneyTransferred <= _this8.savingsAccountBalance) {
	                        _this8.checkingAccountBalance = Number(_this8.checkingAccountBalance) + moneyTransferred;
	                        _this8.savingsAccountBalance = Number(_this8.savingsAccountBalance) - moneyTransferred;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + _this8.checkingAccountBalance + ". The balance of your savings account is now $" + _this8.savingsAccountBalance + ".";
	                        if (exitCalled != true) {
	                            return main.exitApplication(exitCalled, defaultsSet);
	                        }
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to transfer that amount. Please try again.";
	                        if (exitCalled != true) {
	                            return main.exitApplication(exitCalled, defaultsSet);
	                        }
	                    }
	                }
	            }, false);
	        }
	    }, {
	        key: 'exitApplication',
	        value: function exitApplication(exitCalled, defaultsSet) {
	            var _this9 = this;

	            exitCalled = true;
	            document.getElementById('input').value = document.getElementById('input').value + "," + this.checkingAccountBalance + "," + this.savingsAccountBalance;
	            document.getElementById('input').style.display = "block";

	            var XHR = new XMLHttpRequest();
	            var balances = document.getElementById('input').value;
	            XHR.open('POST', document.url, true);
	            XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest0');
	            XHR.send(balances);
	            XHR.onload = function (balances) {
	                console.log('balances = ' + balances);
	                console.log('XHR.responseText = ' + XHR.responseText);
	                _this9.balances = XHR.responseText.split(/,/);
	            };
	            document.getElementById('buttonSix').innerHTML = "RESTART";
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                exitCalled = false;
	                main.hideAndRevealDivs();
	                main.setBackToBeginning();
	                return main.loadData(exitCalled, defaultsSet);
	            }, false);
	        }
	    }, {
	        key: 'setBackToBeginning',
	        value: function setBackToBeginning() {
	            var _one = document.getElementById('buttonOne'),
	                _oneClone = _one.cloneNode(true);
	            _one.parentNode.replaceChild(_oneClone, _one);
	            var _two = document.getElementById('buttonTwo'),
	                _twoClone = _two.cloneNode(true);
	            _two.parentNode.replaceChild(_twoClone, _two);
	            var _three = document.getElementById('buttonThree'),
	                _threeClone = _three.cloneNode(true);
	            _three.parentNode.replaceChild(_threeClone, _three);
	            var _four = document.getElementById('buttonFour'),
	                _fourClone = _four.cloneNode(true);
	            _four.parentNode.replaceChild(_fourClone, _four);
	            var _five = document.getElementById('buttonFive'),
	                _fiveClone = _five.cloneNode(true);
	            _five.parentNode.replaceChild(_fiveClone, _five);
	            var _six = document.getElementById('buttonSix'),
	                _sixClone = _six.cloneNode(true);
	            _six.parentNode.replaceChild(_sixClone, _six);
	            var one = document.getElementById('one'),
	                oneClone = one.cloneNode(true);
	            one.parentNode.replaceChild(oneClone, one);
	            var two = document.getElementById('two'),
	                twoClone = two.cloneNode(true);
	            two.parentNode.replaceChild(twoClone, two);
	            var three = document.getElementById('three'),
	                threeClone = three.cloneNode(true);
	            three.parentNode.replaceChild(threeClone, three);
	            var four = document.getElementById('four'),
	                fourClone = four.cloneNode(true);
	            four.parentNode.replaceChild(fourClone, four);
	            var five = document.getElementById('five'),
	                fiveClone = five.cloneNode(true);
	            five.parentNode.replaceChild(fiveClone, five);
	            var six = document.getElementById('six'),
	                sixClone = six.cloneNode(true);
	            six.parentNode.replaceChild(sixClone, six);
	            var seven = document.getElementById('seven'),
	                sevenClone = seven.cloneNode(true);
	            seven.parentNode.replaceChild(sevenClone, seven);
	            var eight = document.getElementById('eight'),
	                eightClone = eight.cloneNode(true);
	            eight.parentNode.replaceChild(eightClone, eight);
	            var nine = document.getElementById('nine'),
	                nineClone = nine.cloneNode(true);
	            nine.parentNode.replaceChild(nineClone, nine);
	            var zero = document.getElementById('zero'),
	                zeroClone = zero.cloneNode(true);
	            zero.parentNode.replaceChild(zeroClone, zero);
	            document.getElementById('buttonOne').innerHTML = 'I';
	            document.getElementById('buttonTwo').innerHTML = "II";
	            document.getElementById('buttonThree').innerHTML = "III";
	            document.getElementById('buttonFour').innerHTML = "IV";
	            document.getElementById('buttonFive').innerHTML = "V";
	            document.getElementById('buttonSix').innerHTML = "VI";
	            document.getElementById('promptCustomer').innerHTML = "Please insert the three-digit number on the back of your card into the keypad.";
	            document.getElementById('cardNumber').innerHTML = '>';
	            document.getElementById('PIN').innerHTML = '>';
	            document.getElementById('displayArea').innerHTML = '>';
	            document.getElementById('input').value = '>';
	            this.pin = 0;
	            this.cardNumber = 0;
	            this.checkingAccountBalance = 0;
	            this.savingsAccountBalance = 0;
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);