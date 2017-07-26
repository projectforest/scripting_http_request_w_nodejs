var https = require('https');
//var args = process.argv;
// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };

// var requestOptions = {
//   host: args[2],
//   path: args[3]
// };

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML(options){

  https.get(options, function(response){
    response.setEncoding('utf8');
    let output = '';
    response.on('data', function(data){
      output += data;
      //console.log(data);
    });

    response.on('end', function(){
      console.log(output);
      console.log("Response stream complete");
    });
  });

}

getAndPrintHTML(requestOptions);



