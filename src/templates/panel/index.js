// render the template!
import fetchStudents from "../../helpers/fetchStudents.js"
import createStundentCards from './components/StudentCard/index.js'

class Panel {
    
    constructor(courseId) {
        this.courseId = courseId;
    }
    
    sanitize () {
        const cards = document.querySelectorAll('.card');
        if (cards) {
            cards.forEach(card => card.remove());
        }
    }
    
    render = async (filter = {}) => {
        
        this.sanitize();

        const response = await fetchStudents(this.courseId, filter);
        const { message } = response;

        const title = message[0].curso[0].nome
        
        this.addTitle(title);
        createStundentCards(message);
    }
    
    addTitle = (value) => {
        const title = value.replace(/[0-9]/g, '').replace(/-/g, '')
        const courseName = document.querySelector('.course-name');
        courseName.textContent = title;
    }
    updatePanel = ({ target }) => {
        const { id } = target;

        if (id === 'status') return this.render();
        if (id === 'finalizado') return this.render({ status: 'finalizado'});
        if (id === 'cursando') return this.render({ status: 'cursando'});
    }
    handleClickCard = ({ target }) => {
        const { id } = target;
        
        if(!id) return;
        
        console.log(id);
        
        localStorage.setItem('studentID', id);
        
        return location.href='/detail.html'
    } 
}

const course = localStorage.getItem('courseID');
const panel = new Panel(course.toLowerCase());

const filters = document.querySelectorAll('.filter-links')

// add the filters addEventListener
filters.forEach((filter) => filter.addEventListener('click', panel.updatePanel))

await panel.render(course.toLowerCase()); // render the panel template data

const cards = document.querySelectorAll('.card');
// add the addEventListener in each student card
cards.forEach(card => card.addEventListener('click', panel.handleClickCard))