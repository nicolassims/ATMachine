/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        main.getValidNumberCombos();
        main.hideAndRevealPIN();
        main.cardNumberHandler();
    }

    static hideAndRevealPIN(cardNumberCharacters) {
        document.getElementById("PIN").style.display = "none";
        if (cardNumberCharacters == 3) {
            document.getElementById("PIN").style.display = "block";
            main.PINHandler();
        }
    }

    static cardNumberHandler() {
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
                main.insertCardNumber();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
    }

    static insertCardNumber() {
        let cardNumber = document.getElementById('cardNumber').innerHTML;
        document.getElementById('buttonSix').innerHTML = "VI";
        document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN number associated with this card into the keypad.";
        console.log(cardNumber);
    }

    static PINHandler() {
        let PINdigits = 0;
        document.getElementById("one").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            if (PINdigits == 0) {
                document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
                PINdigits++;
            }
            if (PINdigits == 1) {
                document.getElementById('buttonSix').innerHTML = "SUBMIT";
                let PIN = document.getElementById('PIN').innerHTML;
            }
        }, false);
    }

    static getValidNumberCombos() {
        let request = new XMLHttpRequest();
        let filepath = "./data/cardnumbers_PINs.csv";
        request.open("GET", filepath, true);
        request.send();
        request.onload = function() {
            const COLUMNS = 2;
            let validCombos = [];
            if (request.readyState === 4 && request.status === 200) {
                validCombos = request.responseText.split(/,/);
            }
            for (let i = 0; i < validCombos.length; i++) {
                console.log(validCombos[i]);
            }
        }
    }

    static validateNumbers() {
        for (let i = 0; i < validCombos.length; i++) {
            if (validCombos[i] == cardNumber && validCombos[i + 2] == PIN) {
                let validCombo = true;
                console.log(validCombo);
            }
        }
    }
}

window.onload = function() {
    new main();
};