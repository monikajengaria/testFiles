var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://vikas17a.koding.io/admin/index.php');
driver.findElement(By.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[1]/td[1]/a/img')).click();
driver.findElement(By.xpath('//*[@id="textfield"]')).sendKeys('Jon Doe');
driver.findElement(By.xpath('//*[@id="textfield2"]')).sendKeys('BTC-12202-22');
driver.findElement(By.xpath('//*[@id="textfield3"]')).sendKeys('10003222232');
driver.findElement(By.xpath('//*[@id="textfield4"]')).sendKeys('Computer Science');
driver.findElement(By.xpath('//*[@id="button"]')).click();
setTimeout(function(){},1000);
driver.quit();