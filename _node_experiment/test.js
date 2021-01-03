var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is Great</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats")
    }
});

var myPhotoLocation = 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'
https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/myPhoto.jpg"))
});