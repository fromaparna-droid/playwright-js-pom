import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://azv7nash.excelicare.in/v7myECDev/modules/login.html');
 await page.locator('.overlap-group-6').click();
 await page.goto('https://azv7nash.excelicare.in/v7myECDev/Modules/OBSMasterPage.html?v=3#?/OBS-Home');
 await page.locator('#imgBook').click();
 await expect(page.locator('#mandatory')).toContainText('Fields indicated with a red asterisk * are mandatory');
 await expect(page.locator('#lblcap_Titleinfo5')).toContainText('Please provide your gender, mobile telephone number, and date of birth so that we can find a service that is suited to your requirements.');
 await page.getByText('Which of the following describes your Gender? *').click();
 await expect(page.locator('#lblcap_cboGender')).toContainText('Which of the following describes your Gender? *');
 await expect(page.locator('#lblcap_cboPronouns')).toContainText('What are your preferred pronouns?');
 await expect(page.locator('#lblcap_Titleinfo3')).toContainText('Your appointment confirmation will be sent to the following mobile number.');
 await expect(page.locator('#lblcap_Titleinfo4')).toContainText('By providing your mobile number you are confirming that you consent for the sexual health service to contact you by phone or SMS about your care and results. If you wish to remove this consent, then please contact your local sexual health service');
 await page.getByText('Provide a Mobile Number*').click();
 await expect(page.locator('#lblcap_txtMobileNumber')).toContainText('Provide a Mobile Number*');
 await expect(page.locator('#lblcap_txtMobileNumber1')).toContainText('Confirm Mobile Number*');
 await expect(page.locator('#lblcap_dttDateOfBirth')).toContainText('Provide your Date of Birth*');
 await expect(page.locator('#lblcap_txtPostcode')).toContainText('Provide your Postcode of Residence*');
});