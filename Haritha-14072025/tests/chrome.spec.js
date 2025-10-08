import {test , expect} from '@playwright/test';


test ('Empowermx app' , async ({ page }) => {

// const { chromium } = require('playwright');
// const browser = await chromium.launch({ headless: false, channel: 'chrome'  });

const { webkit } = require('playwright');
const browser = await webkit.launch({ headless: false, channel: 'webkit'  });

});

