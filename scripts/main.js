/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        let validCombos = [];
        let PIN = 0;
        let cardNumber = 0;
        main.getValidNumberCombos(validCombos);
        main.hideAndRevealPIN();
        main.cardNumberHandler(cardNumber, PIN);
        main.validateNumbers(cardNumber, PIN);
    }

    static hideAndRevealPIN(cardNumberCharacters) {
        document.getElementById("PIN").style.display = "none";
        if (cardNumberCharacters == 3) {
            document.getElementById("PIN").style.display = "block";
        }
    }

    static cardNumberHandler(cardNumber, PIN) {
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
                main.insertCardNumber(cardNumber);
                main.hideAndRevealPIN(cardNumberCharacters);
                main.PINHandler(PIN);
            }
        }, false);
    }

    static PINHandler(PIN) {
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
                main.insertPIN(PIN);
            }
        }, false);
    }

    static insertCardNumber(cardNumber) {
        cardNumber = document.getElementById('cardNumber').innerHTML;
        document.getElementById('buttonSix').innerHTML = "VI";
        document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN number associated with this card into the keypad.";
        console.log(cardNumber);
    }

    static insertPIN(PIN) {
        PIN = document.getElementById('PIN').innerHTML;
        document.getElementById('buttonSix').innerHTML = "VI";
        document.getElementById('askForCardNumberAndPIN').innerHTML = "PIN inserted.";
        console.log(PIN);
    }

    static getValidNumberCombos(validCombos) {
        let request = new XMLHttpRequest();
        let filepath = "./data/cardnumbers_PINs.csv";
        request.open("GET", filepath, true);
        request.send();
        request.onload = function() {
            if (request.readyState === 4 && request.status === 200) {
                validCombos = request.responseText.split(/,/);
            }
            for (let i = 0; i < validCombos.length; i++) {
                console.log(validCombos[i]);
            }
        };
        main.validateNumbers(validCombos);
    }

    static validateNumbers(validCombos, cardNumber, PIN) {
        let validCombo;
        for (let i = 0; i < validCombos.length; i++) {
            if (validCombos[i] == cardNumber) {
                let j = i + 2;
                if (validCombos[j] == PIN) {
                    validCombo = true;
                    console.log("TRUE");
                }
            }
        }
    }
}

window.onload = function() {
    new main();
};