import axios from 'axios'

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})

// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {
    add(post) {
        return Service.post('/posts', post)
    },
    getAll(searchTerm) {
        let options = {}

        if (searchTerm) {
            options.params = {
                _any: searchTerm
            }
        }

        return Service.get('/posts', options)
    }
}

export { Service, Posts } // exportamo Service za ručne pozive ili Posts za metode.