const puppeteer = require('puppeteer');
async function run(){
const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://www.google.com/search?num=50&newwindow=1&rlz=1C1CHBF_enIN822IN822&ei=XNA0XLupOozdvgTz_6qoDg&q=async+browser+in+puppeteer&oq=async+browser+in+puppeteer&gs_l=psy-ab.3..33i21.159390.169165..169349...6.0..0.235.5330.0j24j4......0....1..gws-wiz.......0j0i71j35i39j0i67j0i131j0i20i263j0i22i10i30j0i22i30j33i160j33i22i29i30.IA0Rw6EnBlE');
  await page.pdf({path : 'sourcex.pdf'});
  browser.close();
}
run();

