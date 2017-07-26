import { TestWorkerPage } from './app.po';

describe('test-worker App', () => {
  let page: TestWorkerPage;

  beforeEach(() => {
    page = new TestWorkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
