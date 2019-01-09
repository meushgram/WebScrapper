var express = require('express');
var bodyParser = require('body-parser');
var app= express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/',function(req,res){
  res.sendFile(__dirname+'/Login1.html');
});
//app.use(express.bodyParser());
app.post('/myaction', function(req, res) {

      // res.send('You sent the name "' + req.body.password+ '".');


// Header Files 
const puppeteer = require('puppeteer');

//headless Flase 
async function run(){
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();

await page.goto(req.body.website);
  const USERNAME_SELECTOR = '#Table_01 > tbody > tr:nth-child(5) > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > font > input';
  const PASSWORD_SELECTOR = '#Table_01 > tbody > tr:nth-child(5) > td:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(1) > font > input';
  const BUTTON_SELECTOR = '#Table_01 > tbody > tr:nth-child(5) > td:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2) > font > input';
    
await page.click(USERNAME_SELECTOR);
await page.keyboard.type(req.body.email);
await page.click(PASSWORD_SELECTOR);
await page.keyboard.type(req.body.password);
await page.click(BUTTON_SELECTOR);
await page.waitForNavigation();

};
run();
});

app.listen(3333, function() {
  console.log('Server running at http://127.0.0.1:3333/');
});
