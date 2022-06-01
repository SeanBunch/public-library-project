function findAuthorById(authors, id) {
  let result = null;
  authors.reduce((foundAuthor, author) => {
    if (author.id === id) {
      result = author;
    };
  }, null);
  return result;
};
function findBookById(books, id) {
  let result = books.find(book => book.id === id);
  return result;
};
function partitionBooksByBorrowedStatus(books) {
  const returnedFalse = books.filter(book => !book.borrows[0].returned);
  const returnedTrue = books.filter(book => book.borrows[0].returned);
  const result = [returnedFalse, returnedTrue]
  return result;
};

function getBorrowersForBook(book, accounts) { }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
