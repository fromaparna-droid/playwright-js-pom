import BasePage from "../pages/basepage.js";
class WelcomePage extends BasePage {
    constructor(page){
        super(page);
    
    //Client logo
    this.welcomeclientLogo=this.page.locator("img[alt='client logo']");
    //Home Image
    this.homeImage=this.page.locator("img[alt='Group 1']");
    //Home Link
    this.homeLink=this.page.locator("button[aria-label='Go to Home'] span");
    //myEC logo
    this.myecLogo=this.page.locator("//img[@id='imgportal_logo']");
    //Screen title
    this.screenTitle=this.page.locator('#ScreenTitle');
    //Screen sub title
    this.subTitle=this.page.locator("div[id='lblinfo2'] span[data-bind='html: control.text']");
    //Book Image
    this.bookImage=this.page.locator("#imgBook");
    //Book Label
    this.bookLabel=this.page.locator("#lblBook");
    //Reschedule Image
    this.rescheduleImage=this.page.locator("#imgReschedule");
    //Reschedule Label
    this.rescheduleLabel=this.page.locator("#lblReschedule");
    //Cancel Image
    this.cancelImage=this.page.locator("#imgCancel");
    //Cancel Label
    this.cancelLabel=this.page.locator("#lblCancel");
    //Passcode Image
    this.passcodeImage=this.page.locator("#imgPasscode");
    //Passcode Label
    this.passcodeLabel=this.page.locator("#lblPasscode");
    //SSK Image
    this.sskImage=this.page.locator("#imgSSK");
    //SSK Label
    this.sskLabel=this.page.locator("#lblSSK");
    //Kiosk Image
    this.kioskImage=this.page.locator("#imgKiosk");
    //Kiosk Label
    this.kioskLabel=this.page.locator("#lblKiosk");
    }

    async verifyClientLogoVisible(){
        return await this.IsControlVisible(this.welcomeclientLogo);
    }
    async verifyHomeImageVisible(){
        return await this.IsControlVisible(this.homeImage);
    }
    async verifyHomeLinkVisible(){
        return await this.IsControlVisible(this.homeLink);
    }
    async verifyMyECLogoVisible(){
        return await this.IsControlVisible(this.myecLogo);
    }
    async verifyScreenTitle(){
        return await this.verifyText(this.screenTitle, "Welcome to myExcelicare Online Booking");
    }
    async verifySubTitle(){
        return await this.verifyText(this.subTitle, "To get started please choose what you wish to do from the options below.");
    }
    async verifyBookImageVisible(){
        return await this.IsControlVisible(this.bookImage);
    }
    async verifyBookLabel(){
        return await this.verifyText(this.bookLabel,"Book");
    }
    async verifyRescheduleImageVisible(){
        return await this.IsControlVisible(this.rescheduleImage);
    }
    async verifyRescheduleLabel(){
        return await this.verifyText(this.rescheduleLabel,"Reschedule");
    }
    async verifyCancelImageVisible(){
        return await this.IsControlVisible(this.cancelImage);
    }
    async verifyCancelLabel(){
        return await this.verifyText(this.cancelLabel,"Cancel");
    }
    async verifyPasscodeImageVisible(){
        return await this.IsControlVisible(this.passcodeImage);
    }
    async verifyPasscodeLabel(){
        return await this.verifyText(this.passcodeLabel,"Passcode");
    }
    async verifySSKImageVisible(){
        return await this.IsControlVisible(this.sskImage);
    }
    async verifySSKLabel(){
        return await this.verifyText(this.sskLabel,"SSK");
    }
    async verifyKioskImageVisible(){
        return await this.IsControlVisible(this.kioskImage);
    }
    async verifyKioskLabel(){
        return await this.verifyText(this.kioskLabel,"Kiosk");
    }
    async clickBook(){
        await this.controlClick(this.bookImage);
        await this.page.waitForTimeout(3000);
    }
    async clickReschedule(){
        await this.controlClick(this.rescheduleImage);
    }
    async clickCancel(){
        await this.controlClick(this.cancelImage);
    }
    async clickPasscode(){
        await this.controlClick(this.passcodeImage);
    }
    async clickSSK(){
        await this.controlClick(this.sskImage);
    }
    async clickKiosk(){
        await this.controlClick(this.kioskImage);
    }


}
export default WelcomePage;