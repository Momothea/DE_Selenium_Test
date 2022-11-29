// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('lastTry', function() {
  //this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('lastTry', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1519, height: 1440 })
    await driver.findElement(By.linkText("Add")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("i do not know")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("why")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.linkText("Tasks")).click()
    await driver.findElement(By.css(".form-control")).click()
    await driver.findElement(By.css(".list-group-item:nth-child(8)")).click()
  })
})
