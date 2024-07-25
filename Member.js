class Member {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  peakBook(isbn, books) {
    const book = books.find((b) => b.isbn === isbn);
    if (book) {
      this.borrowedBooks.push(book);
    } else {
      throw new Error("Book not found in Library");
    }
  }
  replaceBook(isbn) {
    this.borrowedBooks = this.borrowedBooks.filter((b) => b.isbn !== isbn);
  }
}

module.exports = Member;
