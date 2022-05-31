function findAccountById(accounts, id) {
  let findAccountId = accounts.find((account) => account.id === id);
  return findAccountId;
};
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
 
};

function getTotalNumberOfBorrows(account, books) { }

function getBooksPossessedByAccount(account, books, authors) { }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
