const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read === true) {
        this.read = 'read';
    }
    if (read === false) {
        this.read = 'not read yet';
    }
    this.info = function() {
        return '' + this.title + ' by ' + this.author + ', ' + this.pages + '  pages, ' + this.read;
    }
}

function addBookToLibrary(addedBook) {
    myLibrary.push(addedBook);
}

function displayBooks(myLibrary) {  // display each book of myLibrary on page
    for (let i = 0; i < myLibrary.length; i++) {

    }
}

// document query selector all for nodelist, then iterate through nodelist