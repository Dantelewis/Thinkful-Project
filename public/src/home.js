const getTotalBooksCount = books => {
 let total = 0
 for (let book in books){
   total ++
 }
  return total
}

const getTotalAccountsCount = accounts => {
  let total = 0
  for (let account in accounts){
    total ++
  }
  return total
}

const getBooksBorrowedCount = books => {
  let total = 0;
  for (let book of books){
    const borrows = book.borrows;
    for (let borrow of borrows){
      if (borrow.returned === false){
        total++;
      }
    }
  }
  return total;
}

const getMostCommonGenres = books => {
  let genreCounts = {};

  for (let book of books){
    if (genreCounts[book.genre]) {
      genreCounts[book.genre]++;
    } else {
      genreCounts[book.genre] = 1;
    }
  }

  let sortedGenres = Object.keys(genreCounts).map(genre => {
    return { name: genre, count: genreCounts[genre] };
  });

  sortedGenres.sort((a, b) => b.count - a.count);

  return sortedGenres.slice(0, 5);
}
  
const getMostPopularBooks = books => {
  let sortedBooks = books.map(book => ({
    name: book.title,
    count: book.borrows.length
  }));

  sortedBooks.sort((a, b) => b.count - a.count);

  return sortedBooks.slice(0, 5);
}

const getMostPopularAuthors = (books, authors) => {
  let authorCounts = authors.map(author => {
    let total = 0;
    books.forEach(book => {
      if (book.authorId === author.id) {
        total += book.borrows.length;
      }
    });
    return { name: `${author.name.first} ${author.name.last}`, count: total };
  });

  authorCounts.sort((a, b) => b.count - a.count);

  return authorCounts.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
