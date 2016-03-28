/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor(validCombos) {
        let pin = 0;
        let cardNumber = 0;
        main.hideAndRevealPIN();
        main.cardNumberHandler(cardNumber, pin, validCombos);
    }

    static cardNumberHandler(cardNumber, pin, validCombos) {
        let cardNumberCharacters = 0;
        document.getElementById("one").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", function() {
            if (cardNumberCharacters == 3) {
                cardNumber = document.getElementById('cardNumber').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN associated with this card into the keypad.";
                console.log(cardNumber.slice(4,cardNumber.length));
                main.hideAndRevealPIN(cardNumberCharacters);
                main.PINHandler(cardNumber, pin, validCombos);
            }
        }, false);
    }

    static hideAndRevealPIN(cardNumberCharacters) {
        document.getElementById("PIN").style.display = "none";
        if (cardNumberCharacters == 3) {
            document.getElementById("PIN").style.display = "block";
        }
    }

    static PINHandler(cardNumber, pin, validCombos) {
        let PINdigits = 0;
        document.getElementById("one").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
                PINdigits++;
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
                PINdigits++;
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
                PINdigits++;
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
                PINdigits++;
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
                PINdigits++;
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
                PINdigits++;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
                PINdigits++;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
                PINdigits++;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
                PINdigits++;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
                PINdigits++;
            }
        }, false);
        document.getElementById("buttonSix").addEventListener("click", function() {
            if (PINdigits == 1) {
                pin = document.getElementById('PIN').innerHTML;
                document.getElementById('buttonSix').innerHTML = "VI";
                console.log(pin.slice(4, pin.length));
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
            document.getElementById('buttonSix').innerHTML = "Restart";
            document.getElementById("buttonSix").addEventListener("click", function() {
               location.reload();
            }, false);
        } else {
            main.selectAccount();
        }
    }

    static selectAccount() {
        let accountType;
        let accountBalance;
        document.getElementById('askForCardNumberAndPIN').innerHTML = "Which account would you like to access at this time?";
        document.getElementById('buttonSix').innerHTML = "Savings";
        document.getElementById('buttonThree').innerHTML = "Checking";
        document.getElementById("buttonSix").addEventListener("click", function() {
            accountType = "Savings";
            accountBalance = Math.floor((Math.random() * 1000) + 1);
            document.getElementById('askForCardNumberAndPIN').innerHTML = "You have selected your Savings account, which has a balance of $" + accountBalance + ".";

        }, false);
        document.getElementById("buttonThree").addEventListener("click", function() {
            accountType = "Checking";
            accountBalance = Math.floor((Math.random() * 100) + 1);
            document.getElementById('askForCardNumberAndPIN').innerHTML = "You have selected your Checking account, which has a balance of $" + accountBalance + ".";

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