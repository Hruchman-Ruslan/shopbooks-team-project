import axios from 'axios';

class NewsApiBooksService {
  BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {}

  async GetCategoryList() {
    const { data } = await axios(`${this.BASE_URL}/category-list`);
    return data;
  }

  async GetTopBooks() {
    const { data } = await axios(`${this.BASE_URL}/top-books`);
    return data;
  }

  async GetBooksByCategory(nameCategory) {
    const { data } = await axios(
      `${this.BASE_URL}/category/?category=${nameCategory}`
    );
    return data;
  }

  async GetBooksById(bookId) {
    const { data } = await axios(`${this.BASE_URL}/${bookId}`);
    return data;
  }
}

const test = new NewsApiBooksService();
console.log(test.GetCategoryList());
// console.log(test.GetBooksByCategory('Series Books'));
// console.log(test.GetBooksById('643282b1e85766588626a083'));
// console.log(test.GetTopBooks());
