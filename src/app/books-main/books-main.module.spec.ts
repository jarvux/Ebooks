import { BooksMainModule } from './books-main.module';

describe('BooksMainModule', () => {
  let booksMainModule: BooksMainModule;

  beforeEach(() => {
    booksMainModule = new BooksMainModule();
  });

  it('should create an instance', () => {
    expect(booksMainModule).toBeTruthy();
  });
});
