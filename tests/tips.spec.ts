import{expect, test} from '@playwright/test'

test.describe.only("Tipps and tricks", ()=>{
    test('test', async({page}, testInfo) =>{
        await page.goto('http://www.example.com')
        //console.log(testInfo);
    })

    test('test skip browser', async({page, browserName})=>{
        test.fixme(browserName === "chromium", "Feature not ready in Chrome Browser")
        await page.goto('www.example.com')
    })
    

    test("Mouse Movement", async({page})=>{
        await page.goto("https://www.example.com")
        await page.mouse.move(0,0)
        await page.mouse.down()
        await page.mouse.move(0, 100)
    })
    
})