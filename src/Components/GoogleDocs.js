import React from 'react';

/* 
  this file fetches the data from a Google-document by specifying the ID of 
  the document and the APIkey
  
*/


function GoogleDocs (spreadsheetId,apiKey){

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&key=${apiKey}`;

    var DATA = fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        const sheets = data.sheets;
        const jsonData = {};

        sheets.forEach(sheet => {
          const sheetData = sheet.data[0].rowData; // Assuming first data is enough
          const sheetName = sheet.properties.title;
          jsonData[sheetName] = [];
          sheetData.forEach(row => {
            const rowData = row.values.map(cell => cell.formattedValue || '');
            // Check if the row has any non-empty cells
            if (rowData.some(cellValue => cellValue.trim() !== '' )) {
              jsonData[sheetName].push(rowData);
            }
          });
        });
        const firstValue = Object.values(jsonData)[0];
        firstValue.shift();
        return JSON.stringify(firstValue, null, 2)

      })
     
     return DATA
     
}

export default GoogleDocs;


