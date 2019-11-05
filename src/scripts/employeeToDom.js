
// Function that takes a single entry as an argument,
const brownleeContainer = document.querySelector(".brownlee")
const brownleeToDom = (brownlee) => {  
    // grabs the <article> html element, stores it in a variable, 
        // and renders to dom.
        brownleeContainer.innerHTML += brownlee
    }

export default brownleeToDom