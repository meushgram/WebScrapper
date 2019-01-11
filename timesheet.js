var express = require('express');
var bodyParser = require('body-parser');
var app= express();
app.set('view engine','ejs');
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true, executablePath :'/chrome1'  })); 
app.get('/timesheet',function(req,res){
//   res.sendFile(__dirname+'/timesheet.html');
// });
// //app.use(express.bodyParser());
// app.post('/myaction', function(req, res) {

//       // res.send('You sent the name "' + req.body.password+ '".');


// Header Files 
const puppeteer = require('puppeteer');

//headless Flase 
async function run(){
const browser = await puppeteer.launch({headless:false});

const page = await browser.newPage();

await page.goto('https://my.thbs.com/RMS/');
  const USERNAME_SELECTOR = '#username';
  const PASSWORD_SELECTOR = '#password';
  const BUTTON_SELECTOR = 'body > section > div.col-xs-12.col-sm-6.col-md-4.col-lg-4.col-sm-offset-3.col-md-offset-4.col-lg-offset-4 > div.col-sm-12.col-md-12.col-lg-12.col-xs-12 > div.login100-form.col-sm-12.col-md-12.col-lg-12.col-xs-12 > form > div > div.container-login100-form-btn > button > b';
    
await page.click(USERNAME_SELECTOR);
await page.keyboard.type('4960');
await page.click(PASSWORD_SELECTOR);
await page.keyboard.type('Dhanush3122!');
await page.click(BUTTON_SELECTOR);
await page.waitForNavigation();
await page.click('#menu > ul > li:nth-child(2) > a');

await page.click('#menu > ul > li:nth-child(2) > a','Timesheet');

await page.waitForNavigation();

};
run();
});

app.listen(3333, function() {
  console.log('Server running at http://127.0.0.1:3333/');
});
