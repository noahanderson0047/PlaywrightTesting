import{expect, Locator, Page} from '@playwright/test'

export class LoginPage{
    //define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errMsg: Locator


    // init selectors using constructors
    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('')
    }
    //define login page methods
    async visit(){
        await this.page.goto('www.google.com')
    }

}