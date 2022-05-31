// console.log("account.js");
// console.log(accounts[0]);
// console.log(accounts[0].id);
// const id = "5f446f2ecfaf0310387c9603";
// console.log(id);
function findAccountById(accounts, id) {
  let findAccountId = accounts.find((account) => account.id === id);
  // console.log(findAccountId);
  return findAccountId;
};
// console.log(findAccountById(accounts, id));
// console.log(accounts[0].name.last.toUpperCase());
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
 
};
// console.log(sortAccountsByLastName(accounts));

function getTotalNumberOfBorrows(account, books) { }

function getBooksPossessedByAccount(account, books, authors) { }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
