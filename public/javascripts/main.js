/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        let pin = 0;
        let cardNumber = 0;
        let cardNumberCharacters = 0;
        main.hideAndRevealDivs();
        main.loadData (cardNumber, pin, cardNumberCharacters);
    }

    static loadData (cardNumber, pin, cardNumberCharacters) {
        let filePath = '../views/data/cardnumbers_PINs.csv';
        let request = new XMLHttpRequest();
        request.open("POST", filePath, true);
        request.setRequestHeader('x-requested-with', 'XMLHttpRequest1');
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
            return main.cardNumberHandler(cardNumber, pin, validCombos, cardNumberCharacters);
        };
    }

    static cardNumberHandler(cardNumber, pin, validCombos, cardNumberCharacters) {
        document.getElementById("one").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            if (cardNumberCharacters == 4) {
                cardNumber = document.getElementById('cardNumber').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('promptCustomer').innerHTML = "Please insert the one-digit PIN associated with this card into the keypad.";
                console.log(cardNumber.slice(4,cardNumber.length));
                cardNumberCharacters++;
                main.hideAndRevealDivs(cardNumberCharacters);
                return main.PINHandler(cardNumber, pin, validCombos, cardNumberCharacters);
            }
        }, false);
    }

    static hideAndRevealDivs(cardNumberCharacters) {
        document.getElementById("displayArea").style.display = "none";
        document.getElementById("input").style.display = "none";
        document.getElementById("PIN").style.display = "none";
        if (cardNumberCharacters == 5) {
            document.getElementById("PIN").style.display = "block";
        }
    }

    static PINHandler(cardNumber, pin, validCombos, cardNumberCharacters) {
        console.log('cardNumberCharacters=' + cardNumberCharacters);
        document.getElementById("one").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", () => {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            if (cardNumberCharacters == 6) {
                pin = document.getElementById('PIN').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                cardNumberCharacters++;
                return main.validateNumbers(cardNumber, pin, validCombos);
            }
        }, false);
    }

    static validateNumbers(cardNumber, pin, validCombos) {
        let validCombo;
        const ROWS = 2;
        cardNumber = cardNumber.slice(4, cardNumber.length);
        pin = pin.slice(4, pin.length);
        console.log('cardNumber=' + cardNumber);
        console.log('pin=' + pin);
        for (let i = 0; i < ROWS; i++) {
            if (validCombos[i][0] == cardNumber && validCombos[i][1] == pin) {
                validCombo = true;
                console.log("TRUE");
                const XHR = new XMLHttpRequest();
                XHR.open('POST', document.url, true);
                XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest0');
                XHR.send();
                XHR.onload = () => {
                    if (XHR.readyState == 4 && XHR.status == 200) {
                        console.log('XHR.responseText = ' + XHR.responseText);
                        if (XHR.responseText == '') {
                            this.checkingAccountBalance = validCombos[i][2];
                            this.savingsAccountBalance = validCombos[i][3];
                        } else {
                            console.log('ResponseText is not blank');
                            //
                        }
                    }
                };
                console.log('1-' + this.checkingAccountBalance + ' 1-' + this.savingsAccountBalance);
                //
            }
        }
        if (validCombo != true) {
            document.getElementById('promptCustomer').innerHTML = "Incorrect Input. Please try again.";
            return main.exitApplication(this.checkingAccountBalance, this.savingsAccountBalance);
        } else {
            document.getElementById('input').value = cardNumber + "," + pin;
            return main.selectAccount(this.checkingAccountBalance, this.savingsAccountBalance);
        }
    }

    static selectAccount(checkingAccountBalance, savingsAccountBalance) {
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
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + savingsAccountBalance + ". Which action would you like to perform?";
                return main.performAction(accountType, checkingAccountBalance, savingsAccountBalance);
            }
        }, false);
        document.getElementById("buttonThree").addEventListener("click", () => {
            if (accountType == 0 && isBusy == false) {
                accountType = "checking";
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('buttonThree').innerHTML = "III";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + checkingAccountBalance + ". Which action would you like to perform?";
                return main.performAction(accountType, checkingAccountBalance, savingsAccountBalance, isBusy);
            }
        }, false);
    }

    static performAction(accountType, checkingAccountBalance, savingsAccountBalance, isBusy) {
        document.getElementById('buttonSix').innerHTML = "WITHDRAW";
        document.getElementById('buttonThree').innerHTML = "DEPOSIT";
        document.getElementById('buttonTwo').innerHTML = "TRANSFER";
        document.getElementById('buttonFour').innerHTML = "SWITCH ACC.";
        document.getElementById("buttonFour").addEventListener("click", () => {
            if (accountType == "checking") {
                accountType = "savings";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + savingsAccountBalance + ". Which action would you like to perform?";
            } else {
                accountType = "checking";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + checkingAccountBalance + ". Which action would you like to perform?";
            }
        }, false);
        document.getElementById("buttonThree").addEventListener("click", () => {
            isBusy = true;
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "IV";
            return main.performDeposit(accountType, checkingAccountBalance, savingsAccountBalance)
        }, false);
        document.getElementById("buttonSix").addEventListener("click", () => {
            isBusy = true;
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "IV";
            return main.performWithdrawal(accountType, checkingAccountBalance, savingsAccountBalance)
        }, false);
        document.getElementById("buttonTwo").addEventListener("click", () => {
            isBusy = true;
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "IV";
            return main.performTransfer(accountType, checkingAccountBalance, savingsAccountBalance)
        }, false);
    }

    static performDeposit(accountType, checkingAccountBalance, savingsAccountBalance) {
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
                checkingAccountBalance = Number(checkingAccountBalance) + moneyDeposited;
                document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + checkingAccountBalance + ". Thank you for using this terminal.";
            } else {
                savingsAccountBalance = Number(savingsAccountBalance) + moneyDeposited;
                document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + savingsAccountBalance + ". Thank you for using this terminal.";
            }
            return main.exitApplication(checkingAccountBalance, savingsAccountBalance);
        }, false);
    }

    static performWithdrawal(accountType, checkingAccountBalance, savingsAccountBalance) {
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
                if (moneyWithdrawn <= checkingAccountBalance) {
                    checkingAccountBalance = Number(checkingAccountBalance) - moneyWithdrawn;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + checkingAccountBalance + ". Thank you for using this terminal.";
                } else {
                    document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
                }
            } else {
                if (moneyWithdrawn <= savingsAccountBalance) {
                    savingsAccountBalance = Number(savingsAccountBalance) - moneyWithdrawn;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + savingsAccountBalance + ". Thank you for using this terminal.";
                } else {
                    document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
                }
            }
            return main.exitApplication(checkingAccountBalance, savingsAccountBalance);
        }, false);
    }

    static performTransfer(accountType, checkingAccountBalance, savingsAccountBalance) {
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
                if (moneyTransferred <= checkingAccountBalance) {
                    checkingAccountBalance = Number(checkingAccountBalance) - moneyTransferred;
                    savingsAccountBalance = Number(savingsAccountBalance) + moneyTransferred;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + checkingAccountBalance + ". The balance of your savings account is now $" + savingsAccountBalance + ".";
                    return main.exitApplication(checkingAccountBalance, savingsAccountBalance);
                } else {
                    document.getElementById('promptCustomer').innerHTML = "You do not have enough money to transfer that amount. Please try again.";
                    return main.exitApplication(checkingAccountBalance, savingsAccountBalance);
                }
            } else {
                if (moneyTransferred <= savingsAccountBalance) {
                    checkingAccountBalance = Number(checkingAccountBalance) + moneyTransferred;
                    savingsAccountBalance = Number(savingsAccountBalance) - moneyTransferred;
                    document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + checkingAccountBalance + ". The balance of your savings account is now $" + savingsAccountBalance + ".";
                    return main.exitApplication(checkingAccountBalance, savingsAccountBalance);
                } else {
                    document.getElementById('promptCustomer').innerHTML = "You do not have enough money to transfer that amount. Please try again.";
                    return main.exitApplication(checkingAccountBalance, savingsAccountBalance);
                }
            }
        }, false);
    }

    static exitApplication(checkingAccountBalance, savingsAccountBalance) {
        console.log(checkingAccountBalance);
        console.log(savingsAccountBalance);
        document.getElementById('input').value = document.getElementById('input').value + "," + checkingAccountBalance + "," + savingsAccountBalance;
        document.getElementById('input').style.display = "block";

        const XHR = new XMLHttpRequest();
        let balances =  document.getElementById('input').value;
        console.log(balances);
        XHR.open('POST', document.url, true);
        XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest0');
        XHR.send(balances);
        XHR.onload = () => {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log('New XHR.responseText = ' + XHR.responseText);
            }
        };

        document.getElementById('buttonSix').innerHTML = "RESTART";
        document.getElementById("buttonSix").addEventListener("click", () => {
            location.reload();
        }, false);
    }
}

window.onload = () => {
    new main();
};