import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

// instance.get('/test')
// output - > https://api.themoviedb.org/3/test

export default instance;