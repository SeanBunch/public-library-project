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
      if(account.id === books[i].borrows[j].id) {
        count += 1;
      };
    };
  };
  return count;
};

function getBooksPossessedByAccount(account, books, authors) { }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
