const myLibrary = [];
const libDisplay = document.querySelector('.lib');

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
        return '' + this.title + ' by ' + this.author + ', ' + this.pages + '  pages, ';
    }
}

function addBookToLibrary(addedBook) {
    myLibrary.unshift(addedBook);
}

function displayBooks(myLibrary) {  // display each book of myLibrary on page
    while (libDisplay.firstChild) {
        libDisplay.removeChild(libDisplay.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        let newCard = document.createElement('div'); newCard.className = 'card';
        let newInfo = document.createElement('div'); newInfo.className = 'info';
        let newStatus = document.createElement('div'); newStatus.className = 'status';

        let removeButton = document.createElement('img'); removeButton.className = 'remove-button';
        removeButton.src = './icons/close_FILL0_wght400_GRAD0_opsz24.svg'
        removeButton.addEventListener('click', () => {
            removeButton.parentNode.parentNode.removeChild(removeButton.parentNode);
        })

        let newTitle = document.createElement('div'); newTitle.className = 'name';
        let newAuthor = document.createElement('div'); newAuthor.className = 'author';
        let newPages = document.createElement('div'); newPages.className = 'pages';
        newCard.append(newInfo, newStatus, removeButton);
        newInfo.append(newTitle, newAuthor, newPages);

        newTitle.textContent = `"${myLibrary[i].title}"`;
        newAuthor.textContent = `by ${myLibrary[i].author}`;
        newPages.textContent = `${myLibrary[i].pages} pages`;

        libDisplay.appendChild(newCard);
    }

    let addNewCard = document.createElement('div'); addNewCard.className = 'add-card';
    let addButton = document.createElement('img'); addButton.src = './icons/add_circle_FILL0_wght400_GRAD0_opsz24.svg';
    addButton.className = 'add-button';
    libDisplay.appendChild(addNewCard);
    addNewCard.appendChild(addButton);
    addButton.addEventListener('click', () => {
        bookForm.showModal();
    })

}


const bookForm = document.getElementById('book-form');
const addButton = document.querySelector('.add-button');

const newBookTitle = document.getElementById('book-title');
const newBookAuthor = document.getElementById('book-author');
const newBookPages = document.getElementById('book-length');


let newBook;

function createBook() {
    let title = newBookTitle.value;
    let author = newBookAuthor.value;
    let pages = newBookAuthor.value;

    let newBook = new Book(title, author, pages);
    console.log(newBook.info());

    addBookToLibrary(newBook);
    displayBooks(myLibrary);
}

addButton.addEventListener('click', () => {
    bookForm.showModal();
})