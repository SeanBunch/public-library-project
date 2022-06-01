function findAuthorById(authors, id) {
  let result = null;
    authors.reduce((foundAuthor, author) => {
      if (author.id === id) {
        result = author;
      };
    }, null);
  return result;
};
function findBookById(books, id) { }

function partitionBooksByBorrowedStatus(books) { }

function getBorrowersForBook(book, accounts) { }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
