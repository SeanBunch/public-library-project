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
function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let i = 0; i < book.borrows.length; i++) {
    for (let j = 0; j < accounts.length; j++) {
      if (accounts[j].id === book.borrows[i].id) {
        result.push(accounts[j]);
      };
    };
  };
  for (let i = 0; i < result.length; i++) {
    result[i]["returned"] = book.borrows[i].returned
  };
  return result.slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
