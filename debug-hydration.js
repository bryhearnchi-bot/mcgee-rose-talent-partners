const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  const logs = [];

  page.on('console', msg => {
    logs.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', error => {
    errors.push(error.message);
  });

  console.log('Navigating to http://localhost:3000...\n');
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    
    // Wait a bit for any hydration errors
    await page.waitForTimeout(3000);

    console.log('=== PAGE TITLE ===');
    console.log(await page.title());
    
    console.log('\n=== CONSOLE ERRORS ===');
    const consoleErrors = logs.filter(l => l.type === 'error');
    if (consoleErrors.length === 0) {
      console.log('No console errors found!');
    } else {
      consoleErrors.forEach(e => console.log(e.text));
    }

    console.log('\n=== PAGE ERRORS ===');
    if (errors.length === 0) {
      console.log('No page errors found!');
    } else {
      errors.forEach(e => console.log(e));
    }

    // Check for hydration-related text in the page
    console.log('\n=== CHECKING PAGE CONTENT ===');
    const pageContent = await page.content();
    
    if (pageContent.includes('Hydration')) {
      console.log('WARNING: Page contains "Hydration" text - possible error displayed');
    }
    
    // Check for the specific text mentioned in the error
    const yearsText = await page.locator('text=15+ Years').count();
    const placedText = await page.locator('text=+500 Placed').count();
    
    console.log(`"15+ Years" occurrences: ${yearsText}`);
    console.log(`"+500 Placed" occurrences: ${placedText}`);

    // Get the HTML of the floating card element
    console.log('\n=== FLOATING CARD CONTENT ===');
    const floatingCard = await page.locator('.animate-bounce-slow').first();
    if (await floatingCard.count() > 0) {
      const cardHTML = await floatingCard.innerHTML();
      console.log(cardHTML);
    }

  } catch (e) {
    console.error('Navigation error:', e.message);
  }

  await browser.close();
})();
