function getTotalBooksCount(books) {
  let count = 0;
  for (let book in books) {
    count += 1;
  };
  return count;
};
function getTotalAccountsCount(accounts) {
  let count = 0;
  for (let account in accounts) {
    count += 1
  };
  return count;
};
function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    (books[i].borrows[0].returned === false) ? count += 1 : count += 0;
  };
  return count;
};
function getMostCommonGenres(books) {
  let bookGenres = {};
  books.forEach((book) => {
    if (bookGenres[book.genre]) {
      bookGenres[book.genre]++;
    } else {
      bookGenres[book.genre] = 1;
    };
  });
  return Object.entries(bookGenres).map(([name, count]) => {
    return { name, count };
  }).sort((a, b) => (b.count - a.count)).slice(0, 5);
};
function getMostPopularBooks(books) {
  let listOfCount = {};
  books.forEach((book) => {
    listOfCount[book.title] = book.borrows.length;
  });
  return Object.entries(listOfCount).map(([name, count]) => {
    return { name, count };
  }).sort((a, b) => (b.count - a.count)).slice(0, 5);
};
function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  for (let i = 0; i < authors.length; i++) {
    const authorId = authors[i].id;
    let popularAuthor = { name: `${authors[i].name.first} ${authors[i].name.last}`, count: 0 };
    for (let j = 0; j < books.length; j++) {
      if (authorId === books[j].authorId) {
        popularAuthor.count += books[j].borrows.length;
        mostPopularAuthors.push(popularAuthor);
      };
    };
  };
  return mostPopularAuthors.sort((a, b) => (b.count - a.count)).slice(0, 5);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
