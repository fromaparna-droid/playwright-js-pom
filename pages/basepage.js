import { expect } from '@playwright/test'
class BasePage {

    constructor(page){
        this.page=page;
        
        //this.page.subtitle=this.page.locator('span.card-title-normal');
        //this.page.previousButton=this.page.locator('#btnPrevious');
        //this.page.nextButton=this.page.locator('#btnContinue');
    }
    //Access url
    async accessURL(url){
        await this.page.goto(url);
    }
    //Click action
    async controlClick(element){
        await element.click();
    }
    //Enter Text
    async enterText(element,text){
        await fill(element,text)
    }
    //Tick Checkbox
    async tickCheckbox(element){
        await check(element);
    }
    //Untick Checkbox
    async untickCheckbox(element){
        await uncheck(element);
    }
    //Select Dropdown
    async selectByOption(element,option){
        await selectOption(element,option);
    }
    //Select Dropdown by Value
    async selectByValue(element,value){
        await selectOption(element,{value:value});
    }
    //Select Dropdown by Label
    async selectByLabel(element,label){
        await selectOption(element,{label:label});
    }
    //Get Text
    async getText(element){
        return await element.textContent();
    }
    //Get Attribute    
    async getAttribute(element,attribute){
        return await getAttribute(element,attribute);
    }
    //Wait for Element
    async waitForElement(element){
        await waitForSelector(element);
    }
    //Wait for Navigation
    async waitForNavigation(){
        await waitForNavigation();
    }   
    //Wait for Timeout
    async waitForTimeout(timeout){
        await waitForTimeout(timeout);
    }
    //verify text
    async verifyText(element,expectedText){
        await expect(element).toHaveText(expectedText);
    }
    //verify element is visible
    async IsControlVisible(element){
        
        return expect(await element.isVisible()).toBeTruthy();
        
    }
    //Verify element is enabled
    async IsControlEnabled(element){
        try{
            return await isEnabled(element);
        
        } catch (error) {
            throw new Error(`${errorMessage}`)
        }

    }
    //Verify element is disabled
    async isDisabled(element){
        return await isDisabled(element);
    }
    //Verify element is checked    
    async isChecked(element){
        return await isChecked(element);
    }
    //Verify element is unchecked
    async isUnchecked(element){
        return await isUnchecked(element);
    }

}
export default BasePage;