const puppeteer = require('puppeteer');
async function run(){
const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.google.com/search?num=50&newwindow=1&safe=strict&rlz=1C1GCEU_enIN822IN823&ei=YXo1XNisBae40PEPpY-ymAk&q=thbs+mis&oq=thbs&gs_l=psy-ab.3.0.0i71l8.0.0..2435...0.0..0.0.0.......0......gws-wiz.p9I7nxDCIHw');
  await page.screenshot({path : 'save2.png'});
  browser.close();
}
run();

