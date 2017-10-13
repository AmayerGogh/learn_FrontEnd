import { DePage } from './app.po';

describe('de App', () => {
  let page: DePage;

  beforeEach(() => {
    page = new DePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
