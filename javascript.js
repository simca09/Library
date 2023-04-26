console.log('Hello')

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value
  let author = document.querySelector('#author').value
  let pages = document.querySelector('#pages').value
  let read = document.querySelector('#read').checked
  let newBook = new Book(title, author, pages, read)
}

let newBookbtn = document.querySelector('#new-book-btn')
newBookbtn.addEventListener('click', function () {
  let newBookForm = document.querySelector('#new-book-form')
  console.log(newBookForm)
  newBookForm.style.display = 'block'
})
