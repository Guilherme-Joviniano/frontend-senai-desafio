import fetchCourse from '../../helpers/fetchCourse.js';
import createCard from './components/Card/index.js';

const initCoursesCards = async () => {
    const response = await fetchCourse();
    const { message } = response;
    createCard(message)
}

const handleClickCard = async ({ target }) => {
    const { id } = target;

    if(!id) return; 
    
    location.href = '/panel.html'

    localStorage.setItem('courseID', id) 
}

await initCoursesCards(); // main template

const cards = document.querySelectorAll('.card-course');

cards.forEach((card) => card.addEventListener('click', handleClickCard))


