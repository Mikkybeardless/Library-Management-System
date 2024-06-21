class Book {
  constructor(tittle, author, isbn) {
    this.tittle = tittle;
    this.author = author;
    this.isbn = isbn;
    this.id = Math.random() * 10000;
    this.borrowed = false;
    this.userBorrowed = [];
  }

  userBorrow(book) {
    this.userBorrowed.push(book);
  }
  isBorrowed() {
    if (this.borrowed === true) return false;
  }
}

module.exports = Book;
