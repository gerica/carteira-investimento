import { CarteiraInvestimentoPage } from './app.po';

describe('carteira-investimento App', function() {
  let page: CarteiraInvestimentoPage;

  beforeEach(() => {
    page = new CarteiraInvestimentoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('invet works!');
  });
});
