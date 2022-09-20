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
    updatePanel = async ({ target }) => {
        const { id } = target;
        const icon = target.childNodes[1]

        document.querySelectorAll('.fa-check').forEach((el) => el.classList.add('hide'))
        
        console.log(icon);
        icon.classList.remove('hide')

        if (id === 'status') { 
            await this.render();
            
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.addEventListener('click', panel.handleClickCard))

            return;
        }
        if (id === 'finalizado') {
            await this.render({ status: 'finalizado'});            
            
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.addEventListener('click', panel.handleClickCard))
            
            return;
        }
        if (id === 'cursando') {
            await this.render({ status: 'cursando'});
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.addEventListener('click', panel.handleClickCard))
             
            return;
        }
    }
    handleClickCard = ({ target }) => {
        let { id } = target;
        const parentId = target.parentElement.id
        
        if(!id) {
            id = parentId
        }

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