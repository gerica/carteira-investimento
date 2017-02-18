import { browser, element, by } from 'protractor';

export class CarteiraInvestimentoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('invet-root h1')).getText();
  }
}
