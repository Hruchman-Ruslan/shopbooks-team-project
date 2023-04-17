import axios from 'axios';

export default class NewsApiBooksService {
  BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {}

  async getCategoryList() {
    const { data } = await axios(`${this.BASE_URL}/category-list`);
    return data;
  }

  async getTopBooks() {
    const { data } = await axios(`${this.BASE_URL}/top-books`);
    return data;
  }

  async getBooksByCategory(nameCategory) {
    const { data } = await axios(
      `${this.BASE_URL}/category/?category=${nameCategory}`
    );
    return data;
  }

  async getBooksById(bookId) {
    const { data } = await axios(`${this.BASE_URL}/${bookId}`);
    return data;
  }
}
