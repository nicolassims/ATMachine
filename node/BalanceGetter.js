/**
 * Created by root on 5/23/2016.
 */

"use strict";

const DATA_HANDLER = require('./DataHandler');

class NameClass {
    constructor(data) {
        this.data = data;
        /*console.log('\n\n' + this.data['firstName'] + ' ' + this.data['lastName'] + '\n\n');
         console.log(JSON.stringify(this.data) + '\n\n');*/
    }

    getPIN() {
        return this.data['pin'];
    }

    getCardNumber() {
        return this.data['cardNumber'];
    }

    writeData() {
        const COLUMNS = 4;
        let dataArray = [];
        dataArray[0] = this.data['pin'];
        dataArray[1] = this.data['cardNumber'];
        let dataWriter = new DATA_HANDLER(COLUMNS);
        dataWriter.writeDataFile_SD(__dirname + '/../data/' + 'cardnumbers_PINs.csv', dataArray, 3);
    }
}

module.exports = NameClass;