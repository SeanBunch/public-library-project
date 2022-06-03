function getTotalBooksCount(books) {
  let count = 0;
  //  for (let i = 0; i < books.length; i++){
  //    count += 1
  //   };
  for (let book in books) {
    // console.log(book);
    count += 1;
  };
  // console.log(count);
  return count;
};

// console.log(getTotalBooksCount(books));


function getTotalAccountsCount(accounts) { }

function getBooksBorrowedCount(books) { }

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
