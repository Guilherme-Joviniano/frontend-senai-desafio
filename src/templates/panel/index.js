// render the template!
import fetchStudents from "../../helpers/fetchStudents.js"
import createStundentCards from './components/StudentCard/index.js'

class Panel {
    render = async (courseId) => {
        console.log(courseId);
        const response = await fetchStudents(courseId); 
        const { message } = response;
        createStundentCards(message);
    }
}

export default new Panel();