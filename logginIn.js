// Header Files 
const puppeteer = require('puppeteer');
const CREDS = require('./cred');

//headless Flase 
async function run(){
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
  
  await page.goto('https://webmail.thbs.com/index.php');
  const USERNAME_SELECTOR = '#Table_01 > tbody > tr:nth-child(5) > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > font > input';
  const PASSWORD_SELECTOR = '#Table_01 > tbody > tr:nth-child(5) > td:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(1) > font > input';
  const BUTTON_SELECTOR = '#Table_01 > tbody > tr:nth-child(5) > td:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2) > font > input';

await page.click(USERNAME_SELECTOR);
await page.keyboard.type(CREDS.username);
await page.click(PASSWORD_SELECTOR);
await page.keyboard.type(CREDS.password);
await page.click(BUTTON_SELECTOR);
await page.waitForNavigation();
  
}
run();
