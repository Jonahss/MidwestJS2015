var wd = require('wd');
var app = require('sample-apps')('TestApp');

var remotes = {
  local: {
    hostname: "localhost",
    port: 4723
  }
}

var environment = remotes.local;

var desiredCapabilities = {
  platformName: 'iOS',
  platformVersion: '8.4',
  deviceName: 'iPhone 6',
  app: app
}



driver = wd.promiseChainRemote(environment)

driver.init(desiredCapabilities, function(err){
  driver.quit();
});
