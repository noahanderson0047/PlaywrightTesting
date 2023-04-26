import {test, expect} from '@playwright/test'

test.describe('Visual Regression', () => {
    test('Full Page Snapshot', async({page}) => {
        await page.goto('https://www.example.com')
        expect(await page.screenshot()).toMatchSnapshot("Homepage.png")
    })

    test('Single Element Snapshot', async({page}) =>{
        await page.goto('https://www.example.com')
        const pageElement = await page.locator('h1')
        expect(await pageElement.screenshot()).toMatchSnapshot('element.png')
    })
})