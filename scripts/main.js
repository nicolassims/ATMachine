/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor(validCombos) {
        let pin = 0;
        let cardNumber = 0;
        let cardNumberCharacters = 0;
        main.hideAndRevealPIN();
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
                document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN associated with this card into the keypad.";
                console.log(cardNumber.slice(4,cardNumber.length));
                cardNumberCharacters++;
                main.hideAndRevealPIN(cardNumberCharacters);
                main.PINHandler(cardNumber, pin, validCombos, cardNumberCharacters);
            }
        }, false);
    }

    static hideAndRevealPIN(cardNumberCharacters) {
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
                main.validateNumbers(cardNumber, pin, validCombos);
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
            document.getElementById('askForCardNumberAndPIN').innerHTML = "Incorrect Input. Please try again.";
            document.getElementById('buttonSix').innerHTML = "RESTART";
            document.getElementById("buttonSix").addEventListener("click", function() {
               location.reload();
            }, false);
        } else {
            main.selectAccount();
        }
    }

    static selectAccount() {
        let accountType;
        let checkingAccountBalance = Math.floor((Math.random() * 100) + 1);
        let savingsAccountBalance = Math.floor((Math.random() * 1000) + 1);
        document.getElementById('askForCardNumberAndPIN').innerHTML = "Which account would you like to access at this time?";
        document.getElementById('buttonSix').innerHTML = "SAVINGS";
        document.getElementById('buttonThree').innerHTML = "CHECKING";
        document.getElementById("buttonSix").addEventListener("click", function() {
            accountType = "savings";
            document.getElementById('askForCardNumberAndPIN').innerHTML = "You have selected your savings account, which has a balance of $" + savingsAccountBalance + ".";

        }, false);
        document.getElementById("buttonThree").addEventListener("click", function() {
            accountType = "checking";
            document.getElementById('askForCardNumberAndPIN').innerHTML = "You have selected your checking account, which has a balance of $" + checkingAccountBalance + ".";

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