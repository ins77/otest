import { Otest2Page } from './app.po';

describe('otest2 App', () => {
  let page: Otest2Page;

  beforeEach(() => {
    page = new Otest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
