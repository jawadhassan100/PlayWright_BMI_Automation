const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 
        headless: false,
      });
  const page = await browser.newPage();

  await page.goto('https://bmi-calculator-sigma-drab.vercel.app/');

  await page.fill('input[name="weight"]', '68'); 
  await page.waitForTimeout(2000);
  await page.fill('input[name="height"]', '177');
  await page.waitForTimeout(2000); 

  await page.click('#calculate');

  const bmiValue = await page.textContent('#calculatedBmi');
  console.log(`Calculated BMI: ${bmiValue}`);

  await page.waitForTimeout(3000);
  await browser.close();
})();
