/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        this.pin = 0;
        this.cardNumber = 0;
        this.checkingAccountBalance = 0;
        this.savingsAccountBalance = 0;
        this.balances = [];
        let defaultsSet = false;
        let exitCalled = false;
        main.hideAndRevealDivs();
        main.loadData (exitCalled, defaultsSet);
    }

    static loadData (exitCalled, defaultsSet) {
        let filePath = '../views/data/cardnumbers_PINs.csv';
        let request = new XMLHttpRequest();
        request.open("POST", filePath, true);
        request.setRequestHeader('x-requested-set', 'XMLHttpRequest1');
        request.send();
        request.onload = () => {
            const COLUMNS = 4;
            let data, middleData, validCombos = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
            }
            for (let i = 0; i < data.length; i++) {
                middleData = data[i].split(/,/);
                validCombos[i] = [];
                for (let j = 0; j < COLUMNS; j++) {
                    validCombos[i][j] = middleData[j];
                }
            }
            for (let i = 0; i < validCombos.length; i++) {
                for (let j = 0; j < COLUMNS; j++) {
                    console.log(validCombos[i][j]);
                }
            }
            return main.cardNumberHandler(validCombos, exitCalled, defaultsSet);
        };
    }

    static cardNumberHandler(validCombos, exitCalled, defaultsSet) {
        let cardCharacters = 0;
        document.getElementById("one").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            if (cardCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
                cardCharacters++;
            }
            if (cardCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            if (cardCharacters == 4) {
                this.cardNumber = document.getElementById('cardNumber').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('promptCustomer').innerHTML = "Please insert the one-digit PIN associated with this card into the keypad.";
                console.log(this.cardNumber.slice(4,this.cardNumber.length));
                cardCharacters++;
                main.hideAndRevealDivs(cardCharacters);
                return main.PINHandler(validCombos, cardCharacters, exitCalled, defaultsSet);
            }
        }, false);
    }

    static hideAndRevealDivs(cardCharacters) {
        if (cardCharacters == 5) {
            document.getElementById('PIN').style.display = 'block';
        } else {
            document.getElementById('displayArea').style.display = 'none';
            document.getElementById('input').style.display = 'none';
            document.getElementById('PIN').style.display = 'none';
        }
    }

    static PINHandler(validCombos, cardCharacters, exitCalled, defaultsSet) {
        console.log('cardCharacters=' + cardCharacters);
        document.getElementById("one").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            if (cardCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardCharacters++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            if (cardCharacters == 6) {
                this.pin = document.getElementById('PIN').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                cardCharacters++;
                return main.validateNumbers(validCombos, exitCalled, defaultsSet);
            }
        }, false);
    }

    static validateNumbers(validCombos, exitCalled, defaultsSet) {
        let validCombo;
        const ROWS = 2;
        this.cardNumber = this.cardNumber.slice(4, this.cardNumber.length);
        this.pin = this.pin.slice(4, this.pin.length);
        for (let i = 0; i < ROWS; i++) {
            if (validCombos[i][0] == this.cardNumber && validCombos[i][1] == this.pin) {
                validCombo = true;
                const XHR = new XMLHttpRequest();
                XHR.open('POST', document.url, true);
                XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest0');
                XHR.send();
                XHR.onload = () => {
                    if (XHR.readyState == 4 && XHR.status == 200) {
                        console.log('this.defaultsSet = ' + defaultsSet);
                        if (defaultsSet == false) {
                            this.checkingAccountBalance = Number(validCombos[i][2]);
                            this.savingsAccountBalance = Number(validCombos[i][3]);
                            defaultsSet = true;
                        } else {
                            this.checkingAccountBalance = this.balances[2];
                            this.savingsAccountBalance = this.balances[3];
                        }
                    }
                    if (validCombo != true) {
                        document.getElementById('promptCustomer').innerHTML = "Incorrect Input. Please try again.";
                        if (exitCalled != true) {
                            return main.exitApplication(exitCalled, defaultsSet);
                        }
                    } else {
                        document.getElementById('input').value = this.cardNumber + "," + this.pin;
                        return main.selectAccount(exitCalled, defaultsSet);
                    }
                };
            }
        }

    }

    static selectAccount(exitCalled, defaultsSet) {
        let accountType = 0;
        let isBusy = false;
        document.getElementById('promptCustomer').innerHTML = "Which account would you like to access at this time?";
        document.getElementById('buttonSix').innerHTML = "SAVINGS";
        document.getElementById('buttonThree').innerHTML = "CHECKING";
        document.getElementById("buttonSix").addEventListener("click", () => {
            if (accountType == 0 && isBusy == false) {
                accountType = "savings";
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('buttonThree').innerHTML = "III";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + this.savingsAccountBalance + ". Which action would you like to perform?";
                return main.performAction(accountType, isBusy, exitCalled, defaultsSet);
            }
        }, false);
        document.getElementById("buttonThree").addEventListener("click", () => {
            if (accountType == 0 && isBusy == false) {
                accountType = "checking";
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('buttonThree').innerHTML = "III";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + this.checkingAccountBalance + ". Which action would you like to perform?";
                return main.performAction(accountType, isBusy, exitCalled, defaultsSet);
            }
        }, false);
    }

    static performAction(accountType, isBusy, exitCalled, defaultsSet) {
        document.getElementById('buttonSix').innerHTML = "WITHDRAW";
        document.getElementById('buttonThree').innerHTML = "DEPOSIT";
        document.getElementById('buttonTwo').innerHTML = "TRANSFER";
        document.getElementById('buttonFour').innerHTML = "SWITCH ACC.";
        document.getElementById("buttonFour").addEventListener("click", () => {
            if (accountType == "checking") {
                accountType = "savings";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + this.savingsAccountBalance + ". Which action would you like to perform?";
            } else {
                accountType = "checking";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + this.checkingAccountBalance + ". Which action would you like to perform?";
            }
        }, false);
        document.getElementById("buttonThree").addEventListener("click", () => {
            isBusy = true;
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "IV";
            return main.performDeposit(accountType)
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            isBusy = true;
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "IV";
            return main.performWithdrawal(accountType)
        }, false);
        document.getElementById("buttonTwo").addEventListener("click", () => {
            isBusy = true;
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "IV";
            return main.performTransfer(accountType)
        }, false);
    }

    static performDeposit(accountType, exitCalled, defaultsSet) {
        document.getElementById('promptCustomer').innerHTML = "How much money would you like to deposit into your " + accountType + " account?";
        document.getElementById("displayArea").style.display = "block";
        document.getElementById("one").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            let moneyDeposited = document.getElementById("displayArea").innerHTML;
            moneyDeposited = Number(moneyDeposited.slice(4, moneyDeposited.length));
            if (accountType == "checking") {
                this.checkingAccountBalance = Number(this.checkingAccountBalance) + moneyDeposited;
                document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + this.checkingAccountBalance + ". Thank you for using this terminal.";
            } else {
                this.savingsAccountBalance = Number(this.savingsAccountBalance) + moneyDeposited;
                document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + this.savingsAccountBalance + ". Thank you for using this terminal.";
            }
            if (exitCalled != true) {
                return main.exitApplication(exitCalled, defaultsSet);
            }
        }, false);
    }

    static performWithdrawal(accountType, exitCalled, defaultsSet) {
        document.getElementById('promptCustomer').innerHTML = "How much money would you like to withdraw from your " + accountType + " account?";
        document.getElementById("displayArea").style.display = "block";
        document.getElementById("one").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            let moneyWithdrawn = document.getElementById("displayArea").innerHTML;
            moneyWithdrawn = Number(moneyWithdrawn.slice(4, moneyWithdrawn.length));
            if (accountType == "checking") {
                if (moneyWithdrawn <= this.checkingAccountBalance) {
                    this.checkingAccountBalance = Number(this.checkingAccountBalance) - moneyWithdrawn;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + this.checkingAccountBalance + ". Thank you for using this terminal.";
                } else {
                    document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
                }
            } else {
                if (moneyWithdrawn <= this.savingsAccountBalance) {
                    this.savingsAccountBalance = Number(this.savingsAccountBalance) - moneyWithdrawn;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + this.savingsAccountBalance + ". Thank you for using this terminal.";
                } else {
                    document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
                }
            }
            if (exitCalled != true) {
                return main.exitApplication(exitCalled, defaultsSet);
            }
        }, false);
    }

    static performTransfer(accountType, exitCalled, defaultsSet) {
        if (accountType == "checking") {
            document.getElementById('promptCustomer').innerHTML = "How much money would you like to transfer from your checking account to your savings account?";
        } else {
            document.getElementById('promptCustomer').innerHTML = "How much money would you like to transfer from your savings account to your checking account?";
        }
        document.getElementById("displayArea").style.display = "block";
        document.getElementById("one").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            let moneyTransferred = document.getElementById("displayArea").innerHTML;
            moneyTransferred = Number(moneyTransferred.slice(4, moneyTransferred.length));
            if (accountType == "checking") {
                if (moneyTransferred <= this.checkingAccountBalance) {
                    this.checkingAccountBalance = Number(this.checkingAccountBalance) - moneyTransferred;
                    this.savingsAccountBalance = Number(this.savingsAccountBalance) + moneyTransferred;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + this.checkingAccountBalance + ". The balance of your savings account is now $" + this.savingsAccountBalance + ".";
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
                if (moneyTransferred <= this.savingsAccountBalance) {
                    this.checkingAccountBalance = Number(this.checkingAccountBalance) + moneyTransferred;
                    this.savingsAccountBalance = Number(this.savingsAccountBalance) - moneyTransferred;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + this.checkingAccountBalance + ". The balance of your savings account is now $" + this.savingsAccountBalance + ".";
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

    static exitApplication(exitCalled, defaultsSet) {
        exitCalled = true;
        document.getElementById('input').value = document.getElementById('input').value + "," + this.checkingAccountBalance + "," + this.savingsAccountBalance;
        document.getElementById('input').style.display = "block";

        const XHR = new XMLHttpRequest();
        let balances =  document.getElementById('input').value;
        XHR.open('POST', document.url, true);
        XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest0');
        XHR.send(balances);
        XHR.onload = (balances) => {
            console.log('balances = ' + balances);
            console.log('XHR.responseText = ' + XHR.responseText);
            this.balances = XHR.responseText.split(/,/);
        };
        document.getElementById('buttonSix').innerHTML = "RESTART";
        document.getElementById("buttonSix").addEventListener("click", () => {
            exitCalled = false;
            main.hideAndRevealDivs();
            main.setBackToBeginning();
            return main.loadData(exitCalled, defaultsSet);
        }, false);
    }

    static setBackToBeginning() {
        let _one = document.getElementById('buttonOne'), _oneClone = _one.cloneNode(true);
        _one.parentNode.replaceChild(_oneClone, _one);
        let _two = document.getElementById('buttonTwo'), _twoClone = _two.cloneNode(true);
        _two.parentNode.replaceChild(_twoClone, _two);
        let _three = document.getElementById('buttonThree'), _threeClone = _three.cloneNode(true);
        _three.parentNode.replaceChild(_threeClone, _three);
        let _four = document.getElementById('buttonFour'), _fourClone = _four.cloneNode(true);
        _four.parentNode.replaceChild(_fourClone, _four);
        let _five = document.getElementById('buttonFive'), _fiveClone = _five.cloneNode(true);
        _five.parentNode.replaceChild(_fiveClone, _five);
        let _six = document.getElementById('buttonSix'), _sixClone = _six.cloneNode(true);
        _six.parentNode.replaceChild(_sixClone, _six);
        let one = document.getElementById('one'), oneClone = one.cloneNode(true);
        one.parentNode.replaceChild(oneClone, one);
        let two = document.getElementById('two'), twoClone = two.cloneNode(true);
        two.parentNode.replaceChild(twoClone, two);
        let three = document.getElementById('three'), threeClone = three.cloneNode(true);
        three.parentNode.replaceChild(threeClone, three);
        let four = document.getElementById('four'), fourClone = four.cloneNode(true);
        four.parentNode.replaceChild(fourClone, four);
        let five = document.getElementById('five'), fiveClone = five.cloneNode(true);
        five.parentNode.replaceChild(fiveClone, five);
        let six = document.getElementById('six'), sixClone = six.cloneNode(true);
        six.parentNode.replaceChild(sixClone, six);
        let seven = document.getElementById('seven'), sevenClone = seven.cloneNode(true);
        seven.parentNode.replaceChild(sevenClone, seven);
        let eight = document.getElementById('eight'), eightClone = eight.cloneNode(true);
        eight.parentNode.replaceChild(eightClone, eight);
        let nine = document.getElementById('nine'), nineClone = nine.cloneNode(true);
        nine.parentNode.replaceChild(nineClone, nine);
        let zero = document.getElementById('zero'), zeroClone = zero.cloneNode(true);
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
}

window.onload = () => {
    new main();
};