function getTotalBooksCount(books) {
  let count = 0;
  //  for (let i = 0; i < books.length; i++){
  //    count += 1
  //   };
  for (let book in books) {
    // console.log(book);
    count += 1;
  };
  // console.log(count);
  return count;
};
// console.log(getTotalBooksCount(books));


function getTotalAccountsCount(accounts) {
  let count = 0;
  for (let account in accounts) {
    count += 1
  };
  return count;
  // console.log(count);
}
// console.log(getTotalAccountsCount(accounts));

function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    (books[i].borrows[0].returned === false) ? count += 1 : count += 0;
    // console.log(books[i].borrows[0].returned)
  };
  // isReturned ? count += 1 : count += 0;
  // console.log(count);
  return count;
};
// console.log(getBooksBorrowedCount(books));
// count[book.genre] = (count[book.genre] || 0) + 1;

// function listGenre(books) {
//   let list = [];
//   const countObj = books.reduce((count, book) => {
//     count[book.genre] = (count[book.genre] || 0) + 1;
//     list.push({ "name": book.genre, "count": (count[book.genre] || 0) + 1 })
//     //  {"name": book.genre}, {"count": (count[book.genre] || 0) + 1 };
//     // console.log( {"name": book.genre, "count": (count[book.genre] || 0) + 1 })
//     // console.log(list);
//     // console.log(count)
//     return count;
//   }, []);
//   return countObj;
//   // return list
// }
// console.log(listGenre(books));

function getMostCommonGenres(books) {
  let bookGenres = {};
  books.forEach((book) => {
    if (bookGenres[book.genre]) {
      bookGenres[book.genre]++;
    } else {
      bookGenres[book.genre] = 1;
    }
  });
  // console.log(bookGenres);
  return Object.entries(bookGenres).map(([name, count]) => {
    return { name, count };
  }).sort((a, b) => (b.count - a.count)).slice(0, 5);
};

// console.log(getMostCommonGenres(books));


function getMostPopularBooks(books) {
  let listOfCount = {};
  books.forEach((book) => {
    listOfCount[book.title] = book.borrows.length;
    // console.log(book.borrows.length);
    // console.log(listOfCount);
  })
  // console.log(listOfCount);
  return Object.entries(listOfCount).map(([name, count]) => {
    return { name, count };
  }).sort((a, b) => (b.count - a.count)).slice(0, 5);
};
// console.log(getMostPopularBooks(books));

// function getMostPopularAuthors(books, authors) {
//   let popularAuthor = [];
//   // let popularAuthor =  {name: ${authors[i].name.first} ${authors[i].name.last}, count: 0};
//   for (let i = 0; i < authors.length; i++) {
//     // console.log(authors[i].name.first, authors[i].name.last);
//     for (let j = 0; j < books.length; j++) {
//       if (authors[i].id === books[j].authorId) {
//         popularAuthor.push({ name: `${authors[i].name.first} ${authors[i].name.last}`, count: books[j].borrows.length })
//         // let count = 0;
//         // count += books[j].borrows.length
//         //  console.log(books[j].borrows.length);
//         // popularAuthor.count += books[j].borrows.length
//       }
//       // books[j].borrows.length
//     }
//     // console.log(popularAuthor);
//     console.log(popularAuthor);
//   };
// };

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  for (let i = 0; i < authors.length; i++) {
    const authorId = authors[i].id;
    let popularAuthor = { name: `${authors[i].name.first} ${authors[i].name.last}`, count: 0 };
    for (let j = 0; j < books.length; j++) {
      if (authorId === books[j].authorId) {
        popularAuthor.count += books[j].borrows.length;
        mostPopularAuthors.push(popularAuthor);
      }
    }
  }
  return mostPopularAuthors.sort((a, b) => (b.count - a.count)).slice(0, 5);
}
// console.log(getMostPopularAuthors(books, authors));

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
