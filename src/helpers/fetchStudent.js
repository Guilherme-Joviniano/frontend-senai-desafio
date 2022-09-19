import app from '../configs/app.js';


const fetchStudent = async (id) => {
    let url = app.baseURL + 'students/' + id // default url  

    const response = await fetch(url);
    const json = await response.json();    
    return json;
}

export default fetchStudent

