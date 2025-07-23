const {test,expect} = require("@playwright/test")

test('Add To Cart',async({page})=>{
    const pageUrl = 'https://www.saucedemo.com/'
    const pageTitle= 'Swag Labs'
    const usernameLocator = page.locator('input[id="user-name"]')
    const passwordLocator = page.locator('input[id="password"]')
    const signinBtnLocator = page.locator('input[id="login-button"]')
    const usernameValue = 'standard_user'
    const userPasswordValue = 'abcd'
    const errorMessage = page.locator('h3[data-test="error"]')
    const dashboardLocator = page.locator('//div[text()="Sauce Labs Backpack"]')
    const itemsList = page.locator('div[class="inventory_item_name"]')
    const addToCartBTN = page.locator('button[id="add-to-cart-sauce-labs-backpack"]')
    const cartIcon = page.locator('div[id="shopping_cart_container"] a span')
    const cartItem = page.locator('div[id="cart_contents_container"] div[class="inventory_item_name"]')


    await page.goto(pageUrl)
    await expect(page).toHaveTitle(pageTitle)
    await usernameLocator.type(usernameValue)
    await passwordLocator.type(userPasswordValue)
    await signinBtnLocator.click()
    await expect(errorMessage).toContainText('Username and password')
    await passwordLocator.fill("secret_sauce")
    await signinBtnLocator.click()
    await page.waitForLoadState("networkidle")
    await expect(dashboardLocator).toHaveText('Sauce Labs Backpack')
    await page.waitForLoadState('networkidle') // => wait for all the request to complete
    const itemsName = await itemsList.allTextContents() // will return an array of items name
    console.log(itemsName)
    await dashboardLocator.click()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4')
    await addToCartBTN.click()
    await expect(cartIcon).toHaveText('1')
    await cartIcon.click()
    await expect(cartItem).toHaveText('Sauce Labs Backpack')
})

