/**
 * Created by root on 5/5/2016.
 */

"use strict";

const DATA_HANDLER = require('./DataHandler');

class NameClass {
    constructor(data) {
        this.data = data;
    }

    getCardnumber() {
        return this.data['cardnumber'];
    }

    getPIN() {
        return this.data['PIN'];
    }

    writeData() {
        const COLUMNS = 2;
        let dataArray = [];
        dataArray[0] = this.data['cardnumber'];
        dataArray[1] = this.data['PIN'];
        let dataWriter = new DATA_HANDLER(COLUMNS);
        dataWriter.writeDataFile_SD(__dirname + '/../data/' + 'cardnumbers_PINs.csv', dataArray, 3);
    }
}

module.exports = NameClass;