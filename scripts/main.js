/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor(validCombos) {
        let pin = 0;
        let cardNumber = 0;
        let cardNumberCharacters = 0;
         main.hideAndRevealDivs();
         main.cardNumberHandler(cardNumber, pin, validCombos, cardNumberCharacters);
    }

    static cardNumberHandler(cardNumber, pin, validCombos, cardNumberCharacters) {
        document.getElementById("one").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            if (cardNumberCharacters < 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", function() {
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
        document.getElementById("PIN").style.display = "none";
        if (cardNumberCharacters == 5) {
            document.getElementById("PIN").style.display = "block";
        }
    }

    static PINHandler(cardNumber, pin, validCombos, cardNumberCharacters) {
        console.log(cardNumberCharacters);
        document.getElementById("one").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            if (cardNumberCharacters == 5) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                cardNumberCharacters++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", function () {
            if (cardNumberCharacters == 6) {
                pin = document.getElementById('PIN').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                console.log(pin.slice(4, pin.length));
                cardNumberCharacters++;
                return main.validateNumbers(cardNumber, pin, validCombos);
            }
        }, false);
    }

    static validateNumbers(cardNumber, pin, validCombos) {
        let validCombo;
        cardNumber =  cardNumber.slice(4, cardNumber.length);
        pin =  pin.slice(4, pin.length);
        for (let i = 0; i < validCombos.length; i++) {
            if (validCombos[i] == cardNumber) {
                let j = i + 2;
                if (validCombos[j] == pin) {
                    validCombo = true;
                    console.log("TRUE");
                }
            }
        }
        if (validCombo != true) {
            document.getElementById('promptCustomer').innerHTML = "Incorrect Input. Please try again.";
            document.getElementById('buttonSix').innerHTML = "RESTART";
            document.getElementById("buttonSix").addEventListener("click", function() {
               location.reload();
            }, false);
        } else {
            return main.generateMoney();
        }
    }

    static generateMoney() {
        let checkingAccountBalance = Math.floor((Math.random() * 100) + 1);
        let savingsAccountBalance = Math.floor((Math.random() * 1000) + 1);
        return main.selectAccount(checkingAccountBalance, savingsAccountBalance);
    }

    static selectAccount(checkingAccountBalance, savingsAccountBalance) {
        let accountType = 0;
        document.getElementById('promptCustomer').innerHTML = "Which account would you like to access at this time?";
        document.getElementById('buttonSix').innerHTML = "SAVINGS";
        document.getElementById('buttonThree').innerHTML = "CHECKING";
        document.getElementById("buttonSix").addEventListener("click", function() {
            if (accountType == 0) {
                accountType = "savings";
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('buttonThree').innerHTML = "III";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + savingsAccountBalance + ". Which action would you like to perform?";
                return main.performAction(accountType, checkingAccountBalance, savingsAccountBalance);
            }
        }, false);
        document.getElementById("buttonThree").addEventListener("click", function() {
            if (accountType == 0) {
                accountType = "checking";
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('buttonThree').innerHTML = "III";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + checkingAccountBalance + ". Which action would you like to perform?";
                return main.performAction(accountType, checkingAccountBalance, savingsAccountBalance);
            }
        }, false);
    }

    static performAction(accountType, checkingAccountBalance, savingsAccountBalance) {
        document.getElementById('buttonSix').innerHTML = "WITHDRAW";
        document.getElementById('buttonThree').innerHTML = "DEPOSIT";
        document.getElementById('buttonTwo').innerHTML = "TRANSFER";
        document.getElementById('buttonFour').innerHTML = "SWITCH ACC.";
        document.getElementById("buttonFour").addEventListener("click", function() {
            if (accountType == "checking") {
                accountType = "savings";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + savingsAccountBalance + ". Which action would you like to perform?";
            } else {
                accountType = "checking";
                document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + checkingAccountBalance + ". Which action would you like to perform?";
            }
        }, false);
        document.getElementById("buttonThree").addEventListener("click", function() {
            document.getElementById('buttonTwo').innerHTML = "II";
            document.getElementById('buttonSix').innerHTML = "VI";
            document.getElementById('buttonThree').innerHTML = "III";
            document.getElementById('buttonFour').innerHTML = "III";
            return main.performDeposit(accountType, checkingAccountBalance, savingsAccountBalance)
        }, false);
    }

    static performDeposit(accountType, checkingAccountBalance, savingsAccountBalance) {
        document.getElementById('promptCustomer').innerHTML = "How much money would you like to deposit into your " + accountType + " account?";
        document.getElementById("displayArea").style.display = "block";
        document.getElementById("one").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
            document.getElementById('buttonSix').innerHTML = "SUBMIT";
        }, false);
        document.getElementById("buttonSix").addEventListener("click", function () {

            let moneyWithdrawn = document.getElementById("displayArea").innerHTML
            moneyWithdrawn.slice(4, moneyWithdrawn.length);
            document.getElementById('promptCustomer').innerHTML = "You have withdrawn $" + moneyWithdrawn + ".";

        }, false);
    }
}

window.onload = function() {
    let request = new XMLHttpRequest();
    let filepath = "./data/cardnumbers_PINs.csv";
    request.open("GET", filepath, true);
    request.send();
    request.onload = function() {
        if (request.readyState === 4 && request.status === 200) {
            new main(request.responseText.split(/,/));
        }
    };
};