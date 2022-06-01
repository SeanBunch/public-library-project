function findAuthorById(authors, id) {
  let result = null;
    authors.reduce((foundAuthor, author) => {
      if (author.id === id) {
        result = author;
      };
    }, null);
  return result;
};
// console.log(`author object:`, authors[id], `id number:`, id);
// console.log(findAuthorById(authors, id));

// const id = "5f447132320b4bc16f950076"
function findBookById(books, id) {
  let result = books.find(book => book.id === id);
  // console.log(result);
  return result;
};
// console.log(findBookById(books, id));


function partitionBooksByBorrowedStatus(books) { }

function getBorrowersForBook(book, accounts) { }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
