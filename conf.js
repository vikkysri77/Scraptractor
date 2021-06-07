

const prompt = require('prompt-sync')();

global.packageName;

exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      loggingPrefs: {
        browser: 'OFF',
        driver: 'OFF',
        performance: 'ALL',
    },
    'goog:chromeOptions': {
        perfLoggingPrefs: {
            enableNetwork: true,
        },
         args: ['--auto-open-devtools-for-tabs','--log-level=3'],
        w3c: false,
    },
    },
    beforeLaunch: function(){
      const name = prompt('Package name you want to scrap => ');
      const count = prompt('Total no. of data to scrap (in numbers) => ');

        console.log(`\nSearching for ${count} ${name} pacakge in npm repository`);
        global.packageName = name;
        global.packageCount = count; 
      
    },
   
    specs: ['robot.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };