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
    //test
    const people = ["Mike", "Judy", "Peter", "Elon", "Alice"]
    for(const name of people){
        test(`Running test for ${name}`, async({page})=>{
            await page.goto('https://zero.webappsecurity.com/index.html')
            await page.type("#searchTerm", `${name}`)
            await page.waitForTimeout(3000)
        })
    }

    test("Mouse Movement", async({page})=>{
        await page.goto("https://www.example.com")
        await page.mouse.move(0,0)
        await page.mouse.down()
        await page.mouse.move(0, 100)
    })
    
})