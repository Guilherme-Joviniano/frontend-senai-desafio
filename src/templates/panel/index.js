// render the template!
import fetchStudents from "../../helpers/fetchStudents.js"

class Panel {
    render = async (courseId) => {
        const response = await fetchStudents(courseId);
        console.log(response);
    }
}

export default new Panel();