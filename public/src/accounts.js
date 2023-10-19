const findAccountById = (accounts, id) => {
  return accounts.find(account => account.id === id);
}

const sortAccountsByLastName = accounts => {
  return accounts.sort((a, b) => a.name.last.localeCompare(b.name.last));
}

const getTotalNumberOfBorrows = (account, books) => {
  let total = 0;
  for (let book of books){
    const borrows = book.borrows;
    for(let borrow of borrows){
      if(borrow.id === account.id){
        total++;
      }
    }
  }
  return total;
}

const getBooksPossessedByAccount = (account, books, authors) => {
  let booksPossessed = [];
  for (let book of books){
    const borrows = book.borrows;
    for (let borrow of borrows){
      if (borrow.returned === false && borrow.id === account.id){
        let author = authors.find(author => author.id === book.authorId);
        book.author = author;
        booksPossessed.push(book);
      }
    }
  }
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
