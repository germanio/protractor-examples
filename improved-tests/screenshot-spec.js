'use strict';

var fs = require('fs');

function writeScreenshot(data, filename){
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('angularjs homepage without PageObject', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Germán');
        var greeting = element(by.binding('yourName'));
        
        browser.takeScreenshot().then(function(png) {
            writeScreenshot(png, '/tmp/capture.png');
        });
        expect(greeting.getText()).toEqual('Hello Germán!');
    });
});
