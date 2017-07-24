function getAndPrintHTML(){
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log(data);
    });

    response.on('end', function(){
      console.log("Response stream complete");
    });
  });

}


getAndPrintHTML();