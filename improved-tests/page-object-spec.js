'use strict';

describe('angularjs homepage without PageObject', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Germán');
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Germán!');
    });
});

describe('angularjs homepage with PageObject', function() {
    var AngularHomepage = function() {
        var nameInput = element(by.model('yourName'));
        var greeting = element(by.binding('yourName'));
        
        this.get = function() {
            browser.get('http://www.angularjs.org');
        };
        
        this.setName = function(name) {
            nameInput.sendKeys(name);
        };
        
        this.getGreeting = function() {
            return greeting.getText();
        };
    };
    
    it('should greet the named user', function() {
        var angularHomepage = new AngularHomepage();
        
        angularHomepage.get();
        angularHomepage.setName('Germán');
        
        expect(angularHomepage.getGreeting()).toEqual('Hello Germán!');
    });
});