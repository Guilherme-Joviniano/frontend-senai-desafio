import app from '../configs/app.js';

const fetchYear = async (courseId) => {
    const url = app.baseURL + 'years/' + `?course=${courseId}` // default url  

    const response = await fetch(url);
    const json = await response.json();    
    return json;
}

export default fetchYear

