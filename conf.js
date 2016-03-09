exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
//    specs: ['basic-tutorial/spec*.js', 'improved-tests/*-spec.js'],
    capabilities: {
        browserName: 'firefox',
    },
//    multiCapabilities: [{
//        browserName: 'firefox'
//    }, {
//        browserName: 'chrome'
//    }],
    suites: {
        basic_tutorial: 'basic-totorial/**/spec*.js',
        improved_tests: 'improved-tests/**/*-spec.js'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};