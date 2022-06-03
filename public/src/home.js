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

function getMostCommonGenres(books) { }


function getMostPopularBooks(books) { }

function getMostPopularAuthors(books, authors) { }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
