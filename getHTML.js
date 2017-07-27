//var https = require('https');
var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

// function getHTML(options, callback){
//   let output = '';
//   https.get(options, function(response){
//     response.setEncoding('utf8');
    
//     response.on('data', function(data){
     
//       output += data;
//     });

//     response.on('end', function(){
//       callback(output);
//     });
//   });

// }

function printHTML(html){
  console.log(html);
}

getHTML(requestOptions, printHTML);