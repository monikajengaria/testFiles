var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://vikas17a.koding.io/admin/index.php');
driver.findElement(By.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[2]/td[1]/a/img')).click();
driver.findElement(By.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[6]/td[5]/a/img')).click();
setTimeout(function(){},1000);
driver.quit();