// const id = 2;
function findAuthorById(authors, id) {
  // let result = authors.find((author) => author.id === id)
  let result = null;
    authors.reduce((foundAuthor, author) => {
      // console.log(foundAuthor)
      // console.log(author[id]);
      // console.log(id);
      // console.log(author.id);
      if (author.id === id) {
        result = author;
      };
      // console.log(author);
      // return foundAuthor;
    }, null);
  // console.log(result);
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
