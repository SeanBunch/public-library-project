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
      if (account.id === books[i].borrows[j].id) {
        count += 1;
      };
    };
  };
  return count;
};
function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id && books[i].borrows[j].returned === false) {
        result.push(books[i]);
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
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
