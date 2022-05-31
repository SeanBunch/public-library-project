function findAccountById(accounts, id) {
  let findAccountId = accounts.find((account) => account.id === id);
  return findAccountId;
};
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
};
// console.log(sortAccountsByLastName(accounts));
// console.log(books[0].borrows[0].id);
// console.log(accounts[0].id);
// const account = accounts[10];
function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      // console.log(books[i].borrows[j].id);
      if(account.id === books[i].borrows[j].id) {
        count += 1;
      };
    };
  };
  // console.log(count);
  return count;
};
// console.log(getTotalNumberOfBorrows(account, books));

function getBooksPossessedByAccount(account, books, authors) { }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
