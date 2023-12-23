const myLibrary = [];
const libDisplay = document.querySelector('.lib');
displayBooks(myLibrary);

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (readStatus === true) {
        this.readStatus = true;
    } else {
        this.readStatus = false;
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
        newCard.dataset.index = i;
        let newInfo = document.createElement('div'); newInfo.className = 'info';
        let newStatus = document.createElement('div'); newStatus.className = 'status';

        let removeButton = document.createElement('img'); removeButton.className = 'remove-button';
        removeButton.src = './icons/close_FILL0_wght400_GRAD0_opsz24.svg'

        
        let newTitle = document.createElement('div'); newTitle.className = 'name';
        let newAuthor = document.createElement('div'); newAuthor.className = 'author';
        let newPages = document.createElement('div'); newPages.className = 'pages';
        newCard.append(newInfo, removeButton, newStatus);
        newInfo.append(newTitle, newAuthor, newPages,);
        
        newTitle.textContent = `"${myLibrary[i].title}"`;
        newAuthor.textContent = `by ${myLibrary[i].author}`;
        newPages.textContent = `${myLibrary[i].pages} pages`;
        if (myLibrary[i].readStatus === true) {
            newStatus.textContent = 'Read';
            newCard.style.boxShadow = '0px 0px 9px 2px green';
        } else {
            newStatus.textContent = 'Not read';
        }
        
        // reference to myLib index not working
        removeButton.addEventListener('click', () => {
            let thisIndex = removeButton.parentNode.dataset.index;
            removeButton.parentNode.parentNode.removeChild(removeButton.parentNode);
            myLibrary.splice(thisIndex , 1);
            displayBooks(myLibrary);
        })

        newStatus.addEventListener('click', () => {
            let thisIndex;
            thisIndex = (newStatus.parentNode.dataset.index);
            console.log(newStatus);
            console.log(thisIndex);
            if (myLibrary[thisIndex].readStatus) {
                myLibrary[thisIndex].readStatus = false;
            } else {
                myLibrary[thisIndex].readStatus = true;
            }
            displayBooks(myLibrary);
            })

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
const newBookRead = document.getElementById('read');

let newBook;

function createBook() {
    let title = newBookTitle.value;
    let author = newBookAuthor.value;
    let pages = newBookAuthor.value;
    let readStatus = newBookRead.checked;

    let newBook = new Book(title, author, pages, readStatus);
    console.log(newBook.info());

    addBookToLibrary(newBook);
    displayBooks(myLibrary);
}

addButton.addEventListener('click', () => {
    bookForm.showModal();
})