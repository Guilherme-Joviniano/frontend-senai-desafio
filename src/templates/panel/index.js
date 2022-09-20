// render the template!
import fetchStudents from "../../helpers/fetchStudents.js"
import createStundentCards from './components/StudentCard/index.js'
import renderYearMenu from './components/YearMenu/index.js';

class Panel {
    
    constructor(courseId) {
        this.courseId = courseId;
    }
    
    sanitize () {
        const cards = document.querySelectorAll('.card');
        const filters = document.querySelectorAll('.filter-links-year')
        
        if (cards) {
            cards.forEach(card => card.remove());
            filters.forEach(filter => filter.remove())
        }
        
    }
    
    render = async (filter = {}) => {
        
        this.sanitize();

        const response = await fetchStudents(this.courseId, filter);
        
        const { message } = response;

        const title = message[0].curso[0].nome
        
        this.addTitle(title);
        createStundentCards(message);
        await renderYearMenu(this.courseId)
        
        const filterYears = document.querySelectorAll('.filter-links-year');
        filterYears.forEach((filter) => filter.addEventListener('click', panel.updatePanel))

                
        const cards = document.querySelectorAll('.card');
        // add the addEventListener in each student card
        cards.forEach(card => card.addEventListener('click', panel.handleClickCard))

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

        if (icon) icon.classList.remove('hide')

        if (id === 'status') { 
            await this.render();
            return;
        }
        if (id === 'finalizado') {
            await this.render({ status: 'finalizado'});            
            return;
        }
        if (id === 'cursando') {
            await this.render({ status: 'cursando'});
            return;
        }
        else {
            await this.render({ year: id });
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
