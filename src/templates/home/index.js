import fetchCourse from '../../helpers/fetchCourse.js';
import createCard from './components/Card/index.js';
import panel from '../panel/index.js'

const initCoursesCards = async () => {
    const response = await fetchCourse();
    const { message } = response;
    createCard(message)
}

const handleClickCard = async ({ target }) => {
    const { id } = target;
    await panel.render(id.toLowerCase()); // render the panel template data 
}

await initCoursesCards(); // main template

const cards = document.querySelectorAll('.card-course');

cards.forEach((card) => card.addEventListener('click', handleClickCard))


