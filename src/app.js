import fetchCourse from './helpers/fetchCourse.js';
import createCard from './templates/home/components/Card/index.js';
import panel from './templates/panel/index.js'

const initCoursesCards = async () => {
    const response = await fetchCourse();
    const { message } = response;
    createCard(message)
}

const handleClickCard = async ({ target }) => {
    const { id } = target;
    await panel.render(id.toLowerCase());
}

await initCoursesCards();

const cards = document.querySelectorAll('.card-course');

cards.forEach((card) => card.addEventListener('click', handleClickCard))


