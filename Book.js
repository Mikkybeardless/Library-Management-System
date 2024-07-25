class Book {
  constructor(tittle, author, isbn) {
    this.tittle = tittle;
    this.author = author;
    this.isbn = isbn;
    this.id = Math.floor(Math.random() * 1000);
    this.borrowed = false;
  }

  isBorrowed() {
    this.borrowed = true;
  }
  isReturned() {
    this.borrowed = false;
  }
}

module.exports = Book;
