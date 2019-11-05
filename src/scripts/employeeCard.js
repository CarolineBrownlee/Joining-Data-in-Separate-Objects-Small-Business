// Function that turns one entry object into an html string representation of that object

// ...and use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using.

const createBrownleeHTML = (brownlee) => {
    return `
        <header class="employee__name">
            <h1>${brownlee.name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${brownlee.department.name}
        </section>
        <section class="employee__computer">
            Currently using a/an ${brownlee.computer.type}
        </section>
    `
}

export default createBrownleeHTML




