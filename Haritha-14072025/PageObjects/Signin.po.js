const {expect}  = require('@playwright/test');

exports.signinpage = class signinpage{
    constructor(page){
        this.page = page

        this.signinclick = page.locator('//a[@class="login"]')
        this.email = page.locator('//input[@id="email"]')
        this.password = page.locator('//input[@id="passwd"]')
        this.signinbutton = page.locator('//button[@id="SubmitLogin"]')
        this.sigininerror = page.locator('(//div[@class="alert alert-danger"])[1]')
     
    }

    async launchURL(){
    await this.page.goto("http://www.automationpractice.pl/index.php")
    }

    async sigininfo(email, password){

        await this.signinclick.click();
        await this.email.fill(email)
        await this.password.fill(password)
        await this.signinbutton.click();
    }

    async signinerror(){
        await expect(this.signinerror).toBeVisbile()
    }

    async signinsuccess(){
        await expect (this.page).toHaveURL('http://www.automationpractice.pl/index.php?controller=my-account')
    }
}
