const {LoginPage} = require('./LoginPage')
const {DashboardPage} = require('./DashboardPage')
const {TestsPOM} = require('./TestsPOM')


class POManager{

constructor(page){
    this.page=page;
    this.loginPage = new LoginPage(this.page)
    this.dashboardPage = new DashboardPage(this.page)
    this.testpomPage = new TestsPOM(this.page)

    }

    getLoginPage(){
        return this.loginPage
    }

    getDashboardPage(){
        return this.dashboardPage
    }

    getTestsPOMPage()
    {
        return this.testpomPage

    }

}

module.exports = {POManager}