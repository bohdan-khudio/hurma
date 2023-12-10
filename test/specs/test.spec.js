const { Key } = require('webdriverio');
const tariffsPage = require('../../page/tariffs.page.js');

describe('Test suite', () => {

    beforeEach(async() => {

        await browser.url('/tariffs');
        await browser.pause(1000);
    });

    it('go to request for a demo page', async() => {

        await tariffsPage.requestButtonClick();
        
        await expect(await tariffsPage.pageTitle).toEqual('Заявка на демо Hurma');

    });

    it('change language', async() => {        

        await tariffsPage.languageSwitcherClick();
        await tariffsPage.englishClick();
        
        await expect(await tariffsPage.pageTitle).toEqual('Tariffs | HURMA');       
        
    });

    it('change currency', async() => {

        await tariffsPage.selectUah();

        await expect(await tariffsPage.currency.getText()).toEqual('₴');

    });


    it('change amount of employees', async() => {

        await tariffsPage.selectEmployees('0');

        let firstPrice = await tariffsPage.price.getText();    

        await tariffsPage.selectEmployees('1');

        let secondPrice = await tariffsPage.price.getText();

        await expect(firstPrice).not.toEqual(secondPrice);

    });

    it('change amount of recruiters', async() => {

        await tariffsPage.setRecruitersAmount('2');

        let firstPrice = await tariffsPage.price.getText();

        await tariffsPage.setRecruitersAmount('3');        

        let secondPrice = await tariffsPage.price.getText();

        await expect(firstPrice).not.toEqual(secondPrice);       

    });
});