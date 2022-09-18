import fetchStudents from "../../helpers/fetchStudent.js";



const render = async (id) => {
    const response = await fetchStudents(id);
    console.log(response);
    
    const { curso, nome, foto } = response.message;
    
    const { disciplinas } = curso;
    
}



const studentId = localStorage.getItem('studentID');

await render(studentId);