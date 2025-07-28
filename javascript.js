

    const myLibrary = [];

function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary() {

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let result = new Book(title,author,pages,read);
  let pushed = myLibrary.push(result);
  console.log(myLibrary);
  displayItems();
  
}
  

  
  


let submitAction = document.querySelector("#submitButton");
submitAction.addEventListener("click",function(){
event.preventDefault(event);
addBookToLibrary();


})



    let clickButton = document.querySelector(".new-button");
    let formDisplayer = document.querySelector(".new-form");

    clickButton.addEventListener("click",function(){
        console.log("click");
        formDisplayer.style.display = 'block';
    })

  
    

  
  function displayItems(){
  let subBoxes = document.querySelector(".form-boxes");
  subBoxes.style.display= "block";

  subBoxes.innerHTML = "";


  for(let i = 0;i<myLibrary.length;i++){
    let books = myLibrary[i];
    let index = i;

  const card = document.createElement("div");
  card.classList.add("cardToContain");


  const title = document.createElement("h2");
  title.textContent = `Title: ${books.title}`;

  const author = document.createElement("p");
  author.textContent = `Author : ${books.author}`;

  const pages = document.createElement("p");
  pages.textContent= `Pages : ${books.pages}`;

  const read = document.createElement("p");
  read.textContent=`Read: ${books.read}`;

  const readingButton = document.createElement("button");
  readingButton.classList.add("readingButton");
  readingButton.textContent = "I have read the book";

  let clickingRead = readingButton.addEventListener("click",function(event){
    if(read.textContent === "Read: true"){
      read.textContent = "Read: false";

    }
    else if(read.textContent === "Read: false"){
      read.textContent = "Read: true";
    }
  
  event.preventDefault();
  })



  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.textContent = "Remove this book";

  removeButton.addEventListener("click",function(event){
    subBoxes.removeChild(card);
    myLibrary.splice(i,1);
    displayItems();
    

  })

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(readingButton);
  card.appendChild(removeButton);
 
  subBoxes.appendChild(card);
  


  }


  
}
  
    
