import BasePage from "../pages/basepage.js";
class HomePage extends BasePage {

    constructor(page){ 
        super(page);
        //Excelicare Logo
        this.excelicareLogo=this.page.locator('img.logo-4.logo');
        //Client Logo
        this.clientLogo=this.page.locator('img.header-brand-img-2');
        //Welcome title
        this.welcomeTitle=this.page.locator('h1.circularstd-medium-swan-47px');
        //Welcome Info
        this.welcomeInfo=this.page.locator('p.p-2.circularstd-book-normal-pink-swan-19px');
        //myEC logo
        this.myexcelicareLogo=this.page.locator('img.logo-5.logo');
        //Continue as Guest
        this.continueasguestButton=this.page.locator('.overlap-group-6');
        //Sign UP
        this.signupButton=this.page.locator('.group-40-2 > .overlap-group-4');
        //Login
        this.loginButton=this.page.locator('.overlap-group-8');
    }

    async verifyECLogoVisible(){
        return await this.IsControlVisible(this.myexcelicareLogo);
    }
    async verifyClientLogoVisible(){
        return await this.IsControlVisible(this.clientLogo);
    }
    async verifyWelcomeTitle(){
        return await this.getText(this.welcomeTitle);
    }
    async verifyWelcomeInfo(){
        return await this.getText(this.welcomeInfo);
    }
    async verifyContinueAsGuestButtonVisible(){
        return await this.IsControlVisible(this.continueasguestButton);
    }
    async verifySignUpButtonVisible(){
        return await this.IsControlVisible(this.signupButton);
    }
    async verifyLoginButtonVisible(){
        return await this.IsControlVisible(this.loginButton);
    }   
    async clickContinueAsGuest(){   
        await this.controlClick(this.continueasguestButton);
        await this.page.waitForTimeout(3000);
    }
    async clickSignUp(){
        await this.controlClick(this.signupButton);
    }
    async clickLogin(){
        await this.controlClick(this.loginButton);
    }
    async homescreenonload(){
        await this.IsControlVisible(this.excelicareLogo);

    }
    
}
export default HomePage;