const findAuthorById = (authors, id) => {
  return authors.find(author => author.id === id)
}

const findBookById = (books, id) => {
  return books.find(book => book.id === id)
}

const partitionBooksByBorrowedStatus = books => {
  let borrowed = [];
  let returned = [];

  for(let book of books){
    const borrows = book.borrows;
    if (borrows.some(borrow => borrow.returned === false)){
        borrowed.push(book);
    } else {
        returned.push(book);
    }
  }
  return [borrowed, returned];
}

const getBorrowersForBook = (book, accounts) => {
  let borrowers = [];
  book.borrows.forEach(borrow => {
    accounts.forEach(account => {
      if(borrow.id === account.id && borrowers.length < 10) {
        account.returned = borrow.returned;
        borrowers.push(account);
      }
    });
  });
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
