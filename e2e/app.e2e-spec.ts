import { ConceptTestPage } from './app.po';

describe('concept-test App', function() {
  let page: ConceptTestPage;

  beforeEach(() => {
    page = new ConceptTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
