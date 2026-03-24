import test from '../fixtures/fixtures.js'
import fs from 'fs';

const environmentData = JSON.parse(fs.readFileSync('data/environment.json', 'utf-8'));

test.describe.parallel('Guest User Book Appointment', async () => {
    test('Guest User',async({ homepage, welcomepage,bookappointmentpage })=>{
        await test.step('Access myExcelicare URL', async () => {
            await homepage.accessURL(environmentData.url);
        });
        //Home Screen
        await test.step('Verify Excelicare Logo', async () => {
            await homepage.verifyECLogoVisible();        
        });
        await test.step('Verify Client Logo', async () => {
            await homepage.verifyClientLogoVisible();      
        });
        await test.step('Verify Welcome Title', async () => {
            await homepage.verifyWelcomeTitle();
            await homepage.verifyWelcomeInfo();                     
        });
        await test.step('Verify Continue as Guest button', async () => {
            await homepage.verifyContinueAsGuestButtonVisible();     
        });
        await test.step('Verify Sign Up button', async () => {
            await homepage.verifySignUpButtonVisible();   
        });
        await test.step('Verify Login button', async () => {
            await homepage.verifyLoginButtonVisible();  
        });
        await test.step('Click Continue as Guest button', async () => {
            await homepage.clickContinueAsGuest();
        });
      
        //Welcome Screen
        await test.step('Verify Screen Title', async () => {
            await welcomepage.verifyScreenTitle();
        }); 
        await test.step('Verify Sub Title', async () => {
            await welcomepage.verifySubTitle();
        });
        await test.step('Verify Book Image', async () => {
            await welcomepage.verifyBookImageVisible();
        });
        await test.step('Verify Book Label', async () => {
            await welcomepage.verifyBookLabel();
        });
        await test.step('Verify Reschedule Image', async () => {
            await welcomepage.verifyRescheduleImageVisible();
        });
        await test.step('Verify Reschedule Label', async () => {
            await welcomepage.verifyRescheduleLabel();   
        });
        await test.step('Verify Cancel Image', async () => {
            await welcomepage.verifyCancelImageVisible();
        });
        await test.step('Verify Cancel Label', async () => {
            await welcomepage.verifyCancelLabel();   
        });
        await test.step('Verify Passcode Image', async () => {
            await welcomepage.verifyPasscodeImageVisible();
        });
        await test.step('Verify Passcode Label', async () => {
            await welcomepage.verifyPasscodeLabel();   
        });
        await test.step('Verify SSK Image', async () => {
            await welcomepage.verifySSKImageVisible();
        });
        await test.step('Verify SSK Label', async () => {
            await welcomepage.verifySSKLabel();   
        });
        await test.step('Verify Kiosk Image', async () => {
            await welcomepage.verifyKioskImageVisible();
        });
        await test.step('Verify Kiosk Label', async () => {
            await welcomepage.verifyKioskLabel();
        });
        //Click on Book
        await test.step('Click on Book', async () => {
            await welcomepage.clickBook();
        });
        //Book Appointment Screen
        await test.step('Book Appointment screen labels verification', async () => {
           await bookappointmentpage.verifyBookApptScreenLabels();
            //await expect(page.locator('#lblcap_Titleinfo5')).toContainText('Please provide your gender, mobile telephone number, and date of birth so that we can find a service that is suited to your requirements.');

        });
        
    });
});