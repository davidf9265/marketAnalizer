import fs from 'fs';
import { parse } from 'csv-parse';

const loadCSVDataToDataBase = () => {
	// method to translate and load the csv data to the database
}

export const readCSVData = () => {
  fs.readFile(
    // FIXME: create a way for nodejs to get this path by itself (as i dont remember right now)
    '/Users/veevart2023/Developer/ApplicationProcesses/10eqstest/src/adapters/data/data.csv',
    function (err, fileData) {
      parse(fileData, { columns: false, trim: true }, function (err, rows) {
        // Your CSV data is in an array of arrys passed to this callback as rows.
        console.log(rows);
      });
    }
  );
};
