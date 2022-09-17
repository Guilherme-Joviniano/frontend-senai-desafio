import app from '../configs/app.js';


const addQueries = (baseURL, queries) => {
    const url = new URL(baseURL);

    if (!queries) return baseURL;
    const filters = Object.entries(queries) // [key, value]
    
    filters.forEach(([querie, value]) => {
        url.searchParams.append(querie, value);
    })

    return url;
}

const fetchStudents = async (courseId, queries = {}) => {
    let url = app.baseURL + 'students/' + `?course=${courseId}` // default url

    url = addQueries(url, queries); // update the url with the queries

    console.log(url);

    const response = await fetch(url);
    const json = await response.json();    
    return json;
}

export default fetchStudents

