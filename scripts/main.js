/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        main.hideAndRevealPIN();
        main.buttonHandler();
    }

    static hideAndRevealPIN(cardNumberCharacters) {
        document.getElementById("PIN").style.display = "none";
        if (cardNumberCharacters == 3) {
            document.getElementById("PIN").style.display = "block";
            main.PINHandler();
        }
    }

    static buttonHandler() {
        let cardNumberCharacters = 0;
        document.getElementById("one").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            if (cardNumberCharacters != 3) {
                document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
                cardNumberCharacters++;
            }
            if (cardNumberCharacters == 3) {
                main.insertPIN();
                main.hideAndRevealPIN(cardNumberCharacters);
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
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

    static insertPIN() {
        let cardNumber = document.getElementById('cardNumber').innerHTML;
        document.getElementById('cardNumber').innerHTML = ">***";
        document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN number associated with this card into the keypad.";
    }

    static PINHandler() {
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
    }
}

window.onload = function() {
    new main();
};