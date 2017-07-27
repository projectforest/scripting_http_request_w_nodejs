module.exports = function getHTML (options, callback) {
  var https = require('https');
  let output = '';
  https.get(options, function(response){
    response.setEncoding('utf8');
    
    response.on('data', function(data){
     
      output += data;
    });

    response.on('end', function(){
      callback(output);
    });
  });
};

