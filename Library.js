class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  registerMember(user) {
    if (!this.members.includes(user)) this.members.push(user);
  }

  addNewBook(book) {
    this.books.push(book);
  }

  borrowBook(user, isbn) {
    const book = this.books.find((b) => b.isbn === isbn);

    if (user.borrowedBooks.length >= 3) {
      return false;
    }

    book.isBorrowed();

    user.peakBook(isbn, this.books);
    book.userBorrowed(book);

    book.borrowed = true;

    return true;
  }
}

module.exports = Library;
