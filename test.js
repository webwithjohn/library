function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);

function PrintStuff(myDocuments) {
  this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
  console.log(this.documents);
};

const newObj = new PrintStuff("I am a new Object and I can print.");

newObj.print();
