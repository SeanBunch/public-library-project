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


function getTotalAccountsCount(accounts) {
  let count = 0;
  for (let account in accounts) {
    count += 1
  };
  return count;
  // console.log(count);
}
// console.log(getTotalAccountsCount(accounts));

function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    (books[i].borrows[0].returned === false) ? count += 1 : count += 0;
    // console.log(books[i].borrows[0].returned)
  };
  // isReturned ? count += 1 : count += 0;
  // console.log(count);
  return count;
};
// console.log(getBooksBorrowedCount(books));


function getMostCommonGenres(books) {


};
console.log(getMostCommonGenres(books));



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
