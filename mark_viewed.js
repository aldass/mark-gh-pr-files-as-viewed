const puppeteer = require('puppeteer');

const GITHUB_URL = 'https://github.com';
const REPO_OWNER = '';
const REPO_NAME = '';
const PR_NUMBER = '';

async function markAllFilesAsViewed() {
    const browser = await puppeteer.launch({
        headless: false,  // Open browser so you can log in manually if needed
        slowMo: 50,
        userDataDir: './.user_session_data' // Keeps session active
    });

    const page = await browser.newPage();
    
    // Open GitHub PR files tab
    const PR_URL = `${GITHUB_URL}/${REPO_OWNER}/${REPO_NAME}/pull/${PR_NUMBER}/files`;
    await page.goto(PR_URL, { waitUntil: 'networkidle2' });

    // Ensure user is logged in
    if (await page.$('input[name="login"]')) {
        console.log("Please log in to GitHub manually...");
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    }

    // Wait for "Viewed" checkboxes
    await page.waitForSelector('.js-reviewed-checkbox');

    // Get all "Viewed" checkboxes
    const checkboxes = await page.$$('.js-reviewed-checkbox');
    console.log(`Found ${checkboxes.length} files to mark as viewed.`);

    // Click each checkbox to mark as viewed
    for (let checkbox of checkboxes) {
        const isChecked = await (await checkbox.getProperty('checked')).jsonValue();
        if (!isChecked) {
            await checkbox.click();
        }
    }

    console.log('✅ All files marked as viewed.');

    // Close the browser
    await browser.close();
}

markAllFilesAsViewed().catch(console.error);
