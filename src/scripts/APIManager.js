// fetches employee data and expands department key (fk) and computer key (fk) to include their values
const url = "http://localhost:8088/employees?_expand=department&&_expand=computer"

const API = {

    getBrownlees() {
        return fetch(`${url}`)
            .then(response => response.json())
    }
}

export default API
