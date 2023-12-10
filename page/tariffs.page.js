const { Key } = require('webdriverio');

class TariffsPage {

    get pageTitle() { return browser.getTitle(); }

    get requestButton() { return $('.tariff-card.primary .button'); }

    get languageSwitcher() { return $('.language_switcher .dropdown__btn'); }

    get english() { return $('//a[@lang="en"]'); };

    get currencySwitcher() { return $('.currency-select').$('//select'); }

    get currency() { return $('.currency'); }

    get employeesAmount() { return $('//*[@class="tariff-card primary"]//select'); }

    get price() { return $('.tariff-card.primary .price-value'); }

    get recruitersAmount() { return $('//*[@class="tariff-card primary"]//input[@type="tel"]'); }

    async requestButtonClick() {
        await this.requestButton.click();
    }

    async languageSwitcherClick() {
        await this.languageSwitcher.click();
    }

    async englishClick() {
        await this.english.click();
    }

    async selectUah() {
        await this.currencySwitcher.selectByAttribute('value', 'uah');
    }

    async selectEmployees(value) {
        await this.employeesAmount.selectByAttribute('value', value);
    }

    async setRecruitersAmount(amount) {
        await this.recruitersAmount.click();
        await browser.keys([Key.Backspace]);
        await this.recruitersAmount.setValue(amount);
    }


};
const tariffsPage = new TariffsPage();
module.exports = tariffsPage;
