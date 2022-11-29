const {test, expect} = require('@playwright/test')

test('Add/Edit Profile Details',async ({page})=>{

    const pageUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    const pageTitle= 'OrangeHRM'
    const usernameLocator = page.locator('input[name="username"]')
    const passwordLocator = page.locator('input[name="password"]')
    const signinBtnLocator = page.locator('button[type="submit"]')
    const usernameValue = 'Admin'
    const userPasswordValue = 'admin123'
    const dashboardLocator = page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    const dashboardNameLocator = page.locator('[class="oxd-userdropdown-name"]')
    const myInfoLocator = page.locator('a[href="/web/index.php/pim/viewMyDetails"]')
    const myInfoPageHeading = page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    
    await page.goto(pageUrl)
    await expect(page).toHaveTitle(pageTitle)
    await usernameLocator.type(usernameValue)
    await passwordLocator.type(userPasswordValue)
    await signinBtnLocator.click()
    await page.waitForLoadState('networkidle')
    await expect(dashboardNameLocator).toHaveText('Paul Collings')
    await myInfoLocator.click()
    await page.waitForLoadState('networkidle')
    await expect(myInfoPageHeading).toHaveText('PIM')
    await page.pause()

})