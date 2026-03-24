import BasePage from "./basepage.js";
import {expect} from '@playwright/test'

class BookAppointmentPage extends BasePage {
    constructor(page){
        super(page);
        //Book Appointment Progress Bar
        this.bookapptProgressBar=this.page.locator("#pbvalue")
        //Book Appointment Mandatory Information message
        this.bookapptMandatoryInfo=this.page.locator("span[data-bind='html: control.text']");
        //Book Appointment fields information message
        this.bookapptFieldsInfo=this.page.locator("#lblcap_Titleinfo5");
        //Book Appointment Mobile Number conformation message
        this.bookapptMobileNumberConfirmation=this.page.locator("span[id='lblcap_Titleinfo3'] span[data-bind='attr:{style:control.captionhtmlstyle},html:control.text']");
        //Book Appointment Mobile Number consent message
        this.bookapptMobileNumberConsent=this.page.locator("//span[@id='lblcap_Titleinfo4']//span[@data-bind='attr:{style:control.captionhtmlstyle},html:control.text']");
        //Gender Dropdown
        this.genderDropdown=this.page.locator("#cboGender")
        //Gender label
        this.genderLabel=this.page.locator("#lblcap_cboGender")
        //Gender Help Icon
        this.genderHelpIcon=this.page.locator("#divinnerlblhlpicon_cboGender");
        //Gender Help Text
        this.genderHelpText=this.page.locator("#divinnerlblhlpicon_cboGender");
        //Pronouns dropdown
        this.pronounsDropdown=this.page.locator("#cboPronouns");
        //Pronouns Label
        this.pronounsLabel=this.page.locator("#lblcap_cboPronouns");
        //Pronouns Help Icon
        this.pronounsHelpIcon=this.page.locator("#divinnerlblhlpicon_cboPronouns");
        //Pronouns Help Text
        this.pronounsHelpText=this.page.locator("#divinnerlblhlpicon_cboPronouns");
        //Mobile Number
        this.mobilenumberInput=this.page.locator('#txtMobileNumber');
         //Mobile Label
        this.mobilenumberLabel=this.page.locator("#lblcap_txtMobileNumber")
        //Confirm Mobile Number
        this.confirmmobilenumberInput=this.page.locator('#txtMobileNumber1')
        //Confirm Mobile Label
        this.confirmmobilenumberLabel=this.page.locator("#lblcap_txtMobileNumber1")
        //Date of Birth
        this.dobInput=this.page.locator("#dttDateOfBirth");
        //Date of Birth Label
        this.dobLabel=this.page.locator("#lblcap_dttDateOfBirth");
        //Postcode
        this.postcodeInput=this.page.locator('#txtPostcode');
        //Postcode Label
        this.postcodeLabel=this.page.locator("#lblcap_txtPostcode");
    }
    async verifyBookApptScreenLabels(){
        await this.verifyText(this.bookapptFieldsInfo,"Please provide your gender, mobile telephone number, and date of birth so that we can find a service that is suited to your requirements.");
        await this.verifyText(this.bookapptMandatoryInfo,"Fields indicated with a red asterisk * are mandatory");
        await this.verifyText(this.bookapptMobileNumberConfirmation,"Your appointment confirmation will be sent to the following mobile number.");
        await this.verifyText(this.bookapptMobileNumberConsent,"By providing your mobile number you are confirming that you consent for the sexual health service to contact you by phone or SMS about your care and results. If you wish to remove this consent, then please contact your local sexual health service");
        await this.verifyText(this.genderLabel,"Which of the following describes your Gender?      *");
        await this.verifyText(this.pronounsLabel,"What are your preferred pronouns?      *");
        await this.verifyText(this.mobilenumberLabel,"Provide a Mobile Number*");
        await this.verifyText(this.confirmmobilenumberLabel,"Confirm Mobile Number*");
        await this.verifyText(this.dobLabel,"Provide your Date of Birth*");
        await this.verifyText(this.postcodeLabel,"Provide your Postcode of Residence*");
        await this.page.waitForTimeout(2000);
    }
    async verifyBookApptHelpText(element,element1,helptext){
        await this.controlClick(element);
        await this.verifyText(element1,helptext);
    }
}
export default BookAppointmentPage;