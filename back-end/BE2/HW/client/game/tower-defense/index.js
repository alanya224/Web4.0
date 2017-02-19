'use strict';

var express = require('express');
var path = require('path');
var colors = require('./colors');

var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname));
app.use('/polygon', express.static(path.join(__dirname, '../Polygon')));

var pathTree = {};
pathTree['/'] = {info: "'./linhnt_test' - static"};

function logPath(pathTree, level) {
  if(pathTree) {
    var tab = '';
    for(var i = 0; i < (level || 1); i++) {
      tab += '\t';
    }

    var i = 0;
    for(var path in pathTree) {
      if(path != "info"){
        console.log(tab + (++i), colors.bg.Cyan, colors.fg.White, path, colors.Reset, " : ", pathTree[path].info);
        logPath(pathTree[path], (level || 1) + 1);
      }
    }
  }
}

http.listen(6969, function(){
  console.log(colors.bg.White, colors.fg.Black,'Server started. Listening on *:6969', colors.Reset);
  console.log("Path tree");
  logPath(pathTree);
});
