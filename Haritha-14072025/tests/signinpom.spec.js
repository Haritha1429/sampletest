const { test, expect } = require('@playwright/test');
import { signinpage } from '../PageObjects/Signin.po'
import { Cartpage } from '../PageObjects/cartpage.po'
import signindata from '../TestData/signin.json';

let page;
let signin1;
let cart;

test.describe("verify the signin functionality", () => {


    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage();

        signin1= new signinpage(page);
        await page.waitForTimeout(2000);
        cart = new Cartpage(page);
        await page.waitForTimeout(2000);



        await signin1.launchURL();
        await page.waitForTimeout(2000);
           

});

    test("verify signin success", async()=>{
        await signin1.sigininfo(signindata.email, signindata.password);
        await signin1.signinsuccess();
        
        await page.waitForTimeout(2000);


    });

    test("verify the cartpage", async () => {
    await Cartpage.selectwomen
           await page.waitForTimeout(5000);
    });

     test("verify signin error", async()=>{
        await signin1.sigininfo(signindata.wrongemail, signindata.wrongpassword);
        await signin1.signinerror();
        await page.waitForTimeout(5000);

    });

});