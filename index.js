const Book = require("./Book");
const Member = require("./member.js");
const Library = require("./Library");

// library instance
const library = new Library();

const book1 = new Book("The Mummy", "Kelvin Harts", "49yryt34");
const book2 = new Book("Things Fall Apart", "Chinua Achebe", "rfju396");
const book3 = new Book("The Richest Man in Babylon", "Robert", "ted237v");
const book4 = new Book("Harry Potter", "Harry Maguire", "ef23vc");
const book5 = new Book("The 48 Laws of Power", "Robert Greene", "debfh123");
const book6 = new Book("The avatar", "Ella Manuealla", "bcj467");
const book7 = new Book("No Excuses", "Bryan Tracy", "2sfbh678");

// create Members
const Member1 = new Member("Igashi", 1);
const Member2 = new Member("Michael", 2);
const Member3 = new Member("Justina", 3);
const Member4 = new Member("James", 4);
const Member5 = new Member("Doris", 5);

// register books
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);
library.addNewBook(book4);
library.addNewBook(book5);
library.addNewBook(book6);
library.addNewBook(book7);

// register Members
library.registerMember(Member1);
library.registerMember(Member2);
library.registerMember(Member3);
library.registerMember(Member4);
library.registerMember(Member5);

// borrow books
library.borrowBook(Member1, "rfju396");
console.log(Member1);
console.log(book2);

// borrow books
library.borrowBook(Member2, "49yryt34");
console.log(Member2);

// return a book and a new Member should borrow it

library.borrowBook(Member3, "2sfbh678");
console.log(Member1);
console.log(book1);
console.log(Member2);
