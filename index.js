const Book = require("./Book");
const User = require("./User");
const Library = require("./Library");

const book1 = new Book("The Mummy", "Kelvin Harts", "49yryt34");
const book2 = new Book("Things Fall Apart", "Chinua Achebe", "rfju396");
const book3 = new Book("The Richest Man in Babylon", "Robert", "ted237v");
const book4 = new Book("Harry Potter", "Harry Maguire", "ef23vc");
const book5 = new Book("The 48 Laws of Power", "Robert Greene", "debfh123");
const book6 = new Book("The avatar", "Ella Manuealla", "bcj467");
const book7 = new Book("No Excuses", "Bryan Tracy", "2sfbh678");

// create users
const user1 = new User("Igashi");
const user2 = new User("Michael");
const user3 = new User("Justina");
const user4 = new User("James");
const user5 = new User("Doris");

// register books
Library.addNewBook(book1);
Library.addNewBook(book2);
Library.addNewBook(book3);
Library.addNewBook(book4);
Library.addNewBook(book5);
Library.addNewBook(book6);
Library.addNewBook(book7);

// register users
Library.registerMember(user1);
Library.registerMember(user2);
Library.registerMember(user3);
Library.registerMember(user4);
Library.registerMember(user5);

// borrow books
Library.borrowBook(user1, "rfju396");
console.log(user1);
console.log(book1);

// borrow books
Library.borrowBook(user2, "49yryt34");
console.log(user2);

// return a book and a new user should borrow it

Library.borrowBook(user3, "2sfbh678");
console.log(user1);
console.log(book1);
console.log(user2);
