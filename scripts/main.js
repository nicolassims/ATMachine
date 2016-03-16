/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        main.buttonHandler();
    }

    static buttonHandler() {
        let cardNumberCharacters = 0;
        document.getElementById("one").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("two").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("three").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("four").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("five").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("six").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("seven").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("eight").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("nine").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
        document.getElementById("zero").addEventListener("click", function() {
            document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
            cardNumberCharacters++;
            if (cardNumberCharacters == 3) {
                main.insertPIN();
            }
        }, false);
    }

    static insertPIN() {
        let cardNumber = document.getElementById('cardNumber').innerHTML;
        document.getElementById('cardNumber').innerHTML = ">***";
        document.getElementById('askForCardNumberAndPIN').innerHTML = "Please insert the one-digit PIN number associated with this card into the keypad.";
    }
}

window.onload = function() {
    new main();
};