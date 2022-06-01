function findAccountById(accounts, id) {
  let findAccountId = accounts.find((account) => account.id === id);
  return findAccountId;
};
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
};
function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      // console.log(books[i].borrows[j].id);
      if (account.id === books[i].borrows[j].id) {
        count += 1;
      };
    };
  };
  return count;
};

// const account = accounts[2];
// console.log(account);
function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id && books[i].borrows[j].returned === false) {
        // console.log(books[i].borrows[j].returned)
        // console.log("book is:", books[i]);
        result.push(books[i]);
        // console.log(result);

        // console.log(authors.id[1])
        // console.log("account is:", account);
        // console.log(books[i].borrows[j].id);
      };
    };
  };
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (result[i].authorId === authors[j].id) {
        result[i]["author"] = authors[j]

      };
    };
  };
  return result;
  // console.log(result[0].authorId);
  // console.log(result);
  // console.log(account, books, authors);
};
// console.log(getBooksPossessedByAccount(account, books, authors));

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
