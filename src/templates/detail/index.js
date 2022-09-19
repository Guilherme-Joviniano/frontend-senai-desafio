import fetchStudents from "../../helpers/fetchStudent.js";
import renderProfile from './components/Profile/index.js';
import renderGrades from './components/Grades/index.js'

const render = async (id) => {
    const response = await fetchStudents(id);
    console.log(response);
    
    const { curso, nome, foto } = response.message;
    const { disciplinas } = curso[0];

    renderProfile({ foto, nome });
    renderGrades(disciplinas)
    
}



const studentId = localStorage.getItem('studentID');

await render(studentId);