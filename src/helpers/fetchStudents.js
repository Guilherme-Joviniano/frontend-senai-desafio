import app from '../configs/app.js';

const fetchStudents = async (courseId) => {
    const response = await fetch(app.baseURL + 'students/' + `?course=${courseId}`);
    const json = await response.json();    
    return json;
}

export default fetchStudents
