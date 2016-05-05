/**
 * Created by root on 5/5/2016.
 */

"use strict";

class DataHandler {
    constructor(columns) {
        this.columns = columns;
    }

    static writeDataFile_SD(dataPath, data) {
        const FS = require('fs');
        for (let i = 0; i < data.length; i++) {
            if (eval(i) + 1 == data.length) {
                let fileHandle = FS.appendFileSync(dataPath, data[i] + '\n', 'utf8');
            } else {
                let fileHandle = FS.appendFileSync(dataPath, data[i] + ',', 'utf8');
            }
        }
    }
}

module.exports = DataHandler;