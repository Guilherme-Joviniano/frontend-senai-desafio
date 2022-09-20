import fetchYear from "../../../../helpers/fetchYear.js";


const container = document.querySelector('#drop-down-year');

const createFilter = (year) => {
    const span = document.createElement('span');
    span.classList.add('filter-links-year')
    span.id = year
    span.textContent = year 

    return span;
}


const render = async (course) => {
    const response = await fetchYear(course)
    const { message } = response
    message.forEach(year => {
        const filter = createFilter(year)
        container.append(filter)
    });
}

export default render;