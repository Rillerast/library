const tbody = document.querySelector("tbody");

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pages, read) {
    const newEntry = new Book(author, title, pages, read);
    
    let duplicate = false;

    myLibrary.forEach((entry) => {
            if (newEntry.title === entry.title) {
                duplicate = true;
            }
        });

    if (duplicate) return;

    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    Object.entries(newEntry).map((property) => {
        // Property are iterated in creation order unless their key are numeric

        const td = document.createElement("td");
        // Property[0] is the key, property[1] is the value
        td.innerText = property[1];
        tr.appendChild(td);

    });

    const deleteContainer = document.createElement("td");
    tr.appendChild(deleteContainer);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteContainer.append(deleteButton);

    myLibrary.push(newEntry);

    deleteButton.addEventListener("click", (_event) => {
        let removalIndex = 0;
        myLibrary.map((book, index) => {
            if (book.id === newEntry.id) removalIndex = index;
        });
        // Removing in place from the index (first argument) one element (second argument)
        myLibrary.splice(removalIndex, 1);
        tr.remove();
    });

}

const modal = document.querySelector(".new-book-form");

const addFormButton = document.querySelector(".add-form-button");

addFormButton.addEventListener("click", (_event) => {
    modal.classList.remove("hidden");
});

const removeFormButton = document.querySelector(".cancel-form-button");

removeFormButton.addEventListener("click", (_event) => {
    modal.classList.add("hidden");
});


addBookToLibrary("a", "the hobbit", 10, true);
addBookToLibrary("a", "lord of the rings", 10, true);
addBookToLibrary("a", "moby dick", 10, true);
addBookToLibrary("a", "hazerin", 10, true);
addBookToLibrary("b", "war and peace", 10, true);
