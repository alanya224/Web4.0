var FileUtils = require("./FileUtils.js");
var process = require("process");

var dataInLine = [];
var newData = '';
var j=0,count = 0;

  FileUtils.readfile('fileInput.txt', (data) => {
    for (var i = 0;i <data.length;i++) {
      dataInLine[j] = data[i].split(' ');
      j++;
    }

    dataInLine.sort();
    for (i = 0;i <dataInLine.length;i++)
      dataInLine[i][1] = parseInt(dataInLine[i][1]);
    var temp = dataInLine[0];
    i=1;

    while (count < dataInLine.length-1) {
      if (temp[0] == dataInLine[i][0]) {
        temp[1]+=dataInLine[i][1];
        dataInLine.splice(i,1);count++;
      }
      else {
        temp = dataInLine[i][0];
        i++;count++
      }
    }
    for (i = 0;i < dataInLine.length;i++)
      newData+=dataInLine[i][0] + ' ' + dataInLine[i][1] + '\r\n';
    FileUtils.writefile('fileOutput.txt',newData)

});
