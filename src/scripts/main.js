import API from "./APIManager.js"
import createBrownleeHTML from "./employeeCard.js"
import brownleeToDom from "./employeeToDom.js"

// grabs container from index.html
const brownleeContainer = document.querySelector(".brownlee")
// function to get all brownlees to dom
const getBrownlees = () => {
    // fetch call to get all brownlees
    API.getBrownlees().then(parsedBrownlees => {
        // clear the container
        brownleeContainer.innerHTML = ""
        // iterate over the array of brownlees in the database, and for each brownlee, 
        parsedBrownlees.forEach(brownlee => {
            // invokes createBrownleeHTML, taking each brownlee as an argument, and stores the returned string in a variable
            const brownleeHtml = createBrownleeHTML(brownlee)
            // Finally, the function is invoked that takes the above variable as an argument and puts each brownlee on the dom.
            brownleeToDom(brownleeHtml)
        })
    })
}
// call function
getBrownlees()

