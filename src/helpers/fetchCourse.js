import app from '../configs/app.js';

const fetchCourse = async () => {
    const response = await fetch(app.baseURL + 'courses');
    const json = await response.json();    
    return json;
}

export default fetchCourse
