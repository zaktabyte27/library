
library = []

function book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.getRead = function(){
        return read
    }
    this.getPages = function(){
        return pages
    }
    this.getAuthor = function(){
        return author
    }
    this.getTitle = function(){
        return title
    }
    this.setRead = function(){
        if (read){
            read = false
        } else {
            read = true
        }
    }
    this.info = function(){
        if (read){
            return title+" by "+author+" has "+pages+" pages. You have read this book"
        } else {
            return title+" by "+author+" has "+pages+" pages. You have not read this book"
        }
    }
}

//const newBook = new book("Harry Potter","JK Rowling",324,false)

addBookInfo = function(){
    hider.classList.add("hiderOn")
    const addPrompt = document.createElement("form")
    addPrompt.classList.add("container")
    const p = document.createElement("h4")
    p.textContent = "Add book details"
    const pTitle = document.createElement("input")
    pTitle.placeholder = "Title"
    pTitle.required = true
    pTitle.type = "text"
    const pAuthor = document.createElement("input")
    pAuthor.required =  true
    pAuthor.type = "text"
    pAuthor.placeholder = "Author"
    const pPages = document.createElement("input")
    pPages.placeholder = "Pages"
    pPages.required = true
    pPages.type = "text"
    readContainer = document.createElement("div")
    const readLabel = document.createElement("p")
    readLabel.textContent = "Have you read this book?"
    const pRead = document.createElement("input")
    pRead.type = "checkbox"
    console.log(pRead)
    finishBtn = document.createElement("button")
    finishBtn.textContent = "Submit"
    finishBtn.addEventListener("click",() => addBookCard(new book(pTitle.value,pAuthor.value,pPages.value,pRead.checked)))

    body = document.querySelector("body")
    body.appendChild(addPrompt)
    readContainer.appendChild(readLabel)
    readContainer.appendChild(pRead)
    addPrompt.appendChild(p)
    addPrompt.appendChild(pTitle)
    addPrompt.appendChild(pAuthor)
    addPrompt.appendChild(pPages)
    addPrompt.appendChild(readContainer)
    addPrompt.appendChild(pRead)
    addPrompt.appendChild(finishBtn)
}

addBookCard = function(book){
    if (book.title == '' || book.author == ''|| book.pages == ''){
        console.log("Invalid book submission")
    } else {
    library.push(book)
    libraryContainer = document.querySelector(".library")
    card = document.createElement("div")
    card.classList.add("card")
    cTitle = document.createElement("h3")
    cTitle.textContent = book.getTitle()
    cAuthor = document.createElement("h3")
    cAuthor.textContent = book.getAuthor()
    cPages = document.createElement("h3")
    cPages.textContent = book.getPages()
    readButton = document.createElement("button")
    if (book.getRead() ){
        readButton.textContent = "Read"
        readButton.style.backgroundColor = "Green"
    } else {
        readButton.textContent = "Not read"
        readButton.style.backgroundColor = "Red"
    }
    readButton.addEventListener("click",(e)=>readChange(e))
    removeButton = document.createElement("button")
    removeButton.textContent = "Remove book"
    removeButton.addEventListener("click",(e)=> e.target.parentNode.remove())

    libraryContainer.appendChild(card)
    card.appendChild(cTitle)
    card.appendChild(cAuthor)
    card.appendChild(cPages)
    card.appendChild(readButton)
    card.appendChild(removeButton)

    form = document.querySelector(".container")
    form.remove()
    hiderOff()
    }
}

readChange = function(e){
    if (e.target.style.backgroundColor == "green"){
        e.target.style.backgroundColor = "red"
        e.target.textContent = "Not read"
    } else {
        e.target.style.backgroundColor = "green"
        e.target.textContent = "Read"
    }
}


hiderOff = function(){
    hider.classList.remove("hiderOn")
    form = document.querySelector(".container")
    form.remove()
}

hider = document.querySelector(".hider")
hider.addEventListener("click",hiderOff)

addBtn = document.querySelector(".add")
addBtn.addEventListener("click",addBookInfo)

