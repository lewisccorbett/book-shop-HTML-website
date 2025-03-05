function display(book) {    //create a function that can be acsessed from within the html file with the parameter book
    book1= document.getElementById(book) // take the paragraph from the html file and store it as book1 so you can use it in the next line of code
    book1.style.visibility = (book1.style.visibility == "visible") ? "hidden" : "visible";  // this checks if the visibility is visible or hidden if its visible make it hidden and vice versa
}   
