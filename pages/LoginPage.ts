import{expect, Locator, Page} from '@playwright/test'
//Warning New Feature
export class LoginPage{
    //define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errMsg: Locator
    readonly newmsg: Locator


    // init selectors using constructors
    constructor(page: Page){
        this.page = page
        this.newmsg = page.locator('')
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('')
    }
    //define login page methods
    async visit(){
        await this.page.goto('www.google.com')
    }

}