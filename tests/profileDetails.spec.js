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
    const firstName = page.locator('input[name="firstName"]')
    const lastName = page.locator('input[name="lastName"]')
    const genderMale = page.locator('[class="oxd-radio-wrapper"] span')
    const genderFemale = page.locator('[class="oxd-radio-wrapper"] span')
    const nationality = page.locator('div[class="oxd-select-text oxd-select-text--active"]')
    const nationalityDropdown = page.locator('div[class="oxd-select-text oxd-select-text--focus"]')
    const smokerCheckbox = page.locator('label')
  //  const dob = page.locator('input[placeholder="yyyy-mm-dd"]').nth(1)
    const saveBTN = page.locator('button[type="submit"]')
    
    await page.goto(pageUrl)
    await expect(page).toHaveTitle(pageTitle)
    await usernameLocator.type(usernameValue)
    await passwordLocator.type(userPasswordValue)
    await signinBtnLocator.click()
    await page.waitForLoadState('networkidle')
    //await expect(dashboardNameLocator).toHaveText('Paul Collings')
    const name = await dashboardNameLocator.allTextContents()
    console.log("Name of User: "+ name)
    await myInfoLocator.click()
    await page.waitForLoadState('networkidle')
    await expect(myInfoPageHeading).toHaveText('PIM')
    await firstName.fill("John")
    await lastName.fill('Bush')
    await genderFemale.last().click()
    await expect(genderFemale.last()).toBeChecked()
    // console.log(await genderFemale.first().isChecked())

    // await page.evaluate(()=>{

    //     document.evaluate('(//div[@class="oxd-select-text-input"])[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = "Pakistani";

    // })
    await smokerCheckbox.filter({hasText: 'Yes' }).click()
    await smokerCheckbox.filter({hasText: 'Yes'}).uncheck()
    expect(await smokerCheckbox.filter({hasText: 'Yes'}).isChecked()).toBeFalsy()
    await dob.fill('1994-08-17')
    await saveBTN.nth(1).click()
    const toasterText = await page.locator('div[id="oxd-toaster_1"] div').getByText('SuccessSuccessfully Saved')
    await expect(toasterText).toBeVisible()
})