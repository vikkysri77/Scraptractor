const axios = require('axios');
const Flatted = require('flatted');

describe('angularjs homepage todo list', function() {
  var pages = global.packageCount/20;

    beforeAll( async function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;
    
    });

    it('should add a todo', function() {
     
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://www.npmjs.com/search?q='+global.packageName);
        browser.sleep(10000);
        

        let highestPagination = Flatted.stringify(element(by.xpath("(//div[@class='_26391339 dib']//a)[3]")).getAttribute("value")); 
        // console.log("less" + highestPagination);
        if(pages > highestPagination){
        }
        console.log("Pages to iterate ",pages);
        for(let i=0; i<pages;i++) {
          element(by.xpath("(//a[@href='/search?q="+global.packageName+"&page="+i+"&perPage=20'])[1]")).click();
          browser.sleep(2000);
        }
        browser.sleep(10000);

    browser.manage().logs().get('performance').then((browserLogs) => {
      // console.log(browserLogs);
      browserLogs.forEach((browserLog) => {
        var message = JSON.parse(browserLog.response);
        // if (message.method == 'Network.responseReceived') {
          console.log(message);
        // }
      });
    });
    
      
    });
 
  });
