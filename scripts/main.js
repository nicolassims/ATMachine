/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {

        new main.useATM();
    }

    static useATM() {
        let request = new XMLHttpRequest();
        request.open("GET", filePath, true);
        request.send();
        request.onload = function() {
            const COLUMNS = 2;
            let cardNumber, PIN = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
            }
            for (let i = 0; i < data.length; i++) {
                middleData = data[i].split(/,/);
                finalData[i] = []; //makes it an MD array
                for (let j = 0; j < COLUMNS; j++) {
                    finalData[i][j] = middleData[j];
                }
            }
            callback(finalData);
        };
        return main.useATM();
    }
}

window.onload = function() {
    new main();
};