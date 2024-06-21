class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  peakBook(isbn, books) {
    const book = books.find((b) => {
      b.isbn === isbn;
    });
    this.borrowedBooks.push(book);
  }
  returnBook(isbn) {
    this.borrowedBooks = this.borrowedBooks.filter((b) => b.isbn !== isbn);
  }
}

module.exports = User;
